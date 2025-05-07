import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const AuthContext = createContext({
    isAuthenticated: { token: null, user: null },
    login: () => {},
    logout: () => {}
})

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState({
        token: null,
        user: null,
    })

    useEffect(() => {
        const token = Cookies.get('token');
        const user = Cookies.get('user');

        if (token && user) {
            try {
                const parsedUser = JSON.parse(user);

                const expiryTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
                if (expiryTime > Date.now()) {
                    setIsAuthenticated({ token, user: parsedUser });
                } else {
                    logout();
                    alert('Token has expired, please login again');
                }
            } catch (error) {
                console.error('Failed to parse user from cookies', error);
                setIsAuthenticated({ token: null, user: null });
            }
        }
    }, [])

    const login = (token, user) => {
        setIsAuthenticated({ token, user });
        Cookies.set('token', token, { expires: 7 });  // Token hết hạn sau 1 ngày
        Cookies.set('user', JSON.stringify(user), { expires: 7 });  // User hết hạn sau 1 ngày
        window.location.href = '/home';  // Điều hướng đến trang home sau khi đăng nhập
    }

    const logout = () => {
        setIsAuthenticated({ token: null, user: null });
        Cookies.remove('token');
        Cookies.remove('user');
        window.location.href = '/';  // Điều hướng đến trang chủ sau khi đăng xuất
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
