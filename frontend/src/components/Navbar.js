import { faBell, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext'
import { useSearch } from '../contexts/SearchContext'
import Search from './Search'

import './Navbar.css'

const Navbar = () => {
	const { isAuthenticated, logout } = useContext(AuthContext)
	const { cartQuantity } = useContext(CartContext)
	const { updateKeyword } = useSearch()

	const navigate = useNavigate()

	const handleLogout = () => {
		logout()
		navigate('/')
	}

	const handleSearch = (keyword) => {
		updateKeyword(keyword)
		navigate('/product/search');
	}

	return (
		<nav className='navbar navbar-expand-lg sticky-top'>
			<div className='container-fluid'>
				<div className='navbar-brand ml-30 mr-0 w-400'>
					<Link to='/' className='nav-link'>
						<img src={`${process.env.PUBLIC_URL}/images/photos/logo.png`} alt='logo' className='logo' />
					</Link>
				</div>
				<div className='collapse navbar-collapse mx-0' id='navbarSupportedContent'>
					<ul className='navbar-nav mb-2 mb-lg-0 text-center mx-auto d-flex justify-content-center'>
						<li className='nav-item'>
							<div className='mx-3'>
								<Link to='/' className='nav-link'>HOME</Link>
							</div>
						</li>
						<li className='nav-item'>
							<div className='mx-3'>
								<Link to='/product/wool' className='nav-link'>WOOL</Link>
							</div>
						</li>
						<li className='nav-item dropdown mx-3 d-flex align-item-center'>
							<div className='px-1'>
								<Link to='/product/product' className='nav-link'>PRODUCT</Link>
							</div>
							<button type="button" className='dropdown-toggle bg-transparent border-0 p-0' data-bs-toggle='dropdown' aria-expanded='false' aria-label='Toggle Dropdown'></button>
							<ul className='dropdown-menu'>
								<li className='dropdown-item'><Link to='/product/product/animal' className='nav-link'>Animal</Link></li>
								<li className='dropdown-item'><Link to='/product/product/plant' className='nav-link'>Plant</Link></li>
								<li className='dropdown-item'><Link to='/product/product/food' className='nav-link'>Food</Link></li>
								<li className='dropdown-item'><Link to='/product/product/cloth' className='nav-link'>Cloth</Link></li>
								<li className='dropdown-item'><Link to='/product/product/accessory' className='nav-link'>Accessory</Link></li>
								<li className='dropdown-item'><Link to='/product/product/mochi' className='nav-link'>Mochi</Link></li>
								<li className='dropdown-item'><Link to='/product/product/other' className='nav-link'>Other</Link></li>
							</ul>
						</li>
						<li className='nav-item'>
							<div className='mx-3'>
								<Link to='/product/material' className='nav-link'>MATERIAL</Link>
							</div>
						</li>
						<li className='nav-item'>
							<div className='mx-3'>
								<Link to='/product/tool' className='nav-link'>TOOL</Link>
							</div>
						</li>
					</ul>
					<div className='w-400'>
						{isAuthenticated.token ? (
							<div className='d-flex float-end mx-4'>
								<button type='button' className='bg-transparent border-0 p-0'>
									<Search onSearch={handleSearch} />
								</button>
								<div className='nav-icon d-flex'>
									<div className='cart-count'>
										<FontAwesomeIcon icon={faBell} className='mx-2 icon-nav' />
										<span className='badge d-flex align-items-center justify-content-center'>
											<span>6</span>
										</span>
									</div>
								</div>
								<div className='nav-icon d-flex'>
									<Link to='/cart' className='cart-count'>
										<FontAwesomeIcon icon={faShoppingCart} className='text-color mx-2 icon-nav' />
										<span className='badge d-flex align-items-center justify-content-center'>
											<span>{cartQuantity}</span>
										</span>
									</Link>
								</div>
								<div className='nav-icon dropdown'>
									<button type="button" className='text-black bg-transparent border-0 p-0' data-bs-toggle='dropdown' aria-expanded='false'>
										<FontAwesomeIcon icon={faUser} className='text-color mx-2 icon-nav' />
									</button>
									<ul className=' dropdown-menu dropdown-menu-end'>
										<li><Link to={`/profile/${isAuthenticated.user.Username}`} className='text-color dropdown-item text-dark'>Your Profile</Link></li>
										<li><Link to='/comming-soon' className='text-color dropdown-item' style={{ cursor: 'no-drop' }}>Help & Support</Link></li>
										<li><hr className='dropdown-divider' /></li>
										<li className='dropdown-item' style={{ cursor: 'pointer' }} onClick={handleLogout}>Sign out</li>
									</ul>
								</div>
							</div>
						) : (
							<div className='d-flex float-end mx-2'>
								<button type="button" className='bg-transparent border-0 p-0'>
									<Search onSearch={handleSearch} />
								</button>
								<div className='nav-button mx-1'>
									<button className='btn rounded-pill border border-dark'><Link to='/login' className='text-color'>Sign In</Link></button>
								</div>
								<div className='nav-button mx-1'>
									<button className='btn rounded-pill border border-dark'><Link to='/register' className='text-color'><b>Sign Up</b></Link></button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar