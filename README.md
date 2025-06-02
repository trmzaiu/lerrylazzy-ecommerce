# 🧶 LerryLazzy – Online Yarn Shop

LerryLazzy is an online yarn store where users can explore and purchase a wide variety of high-quality yarns for knitting, crocheting, and other crafts.

## 🌐 Live Demo
[👉 Visit Website] [https://wad-project-lerrylazzy.vercel.app](https://wad-project-lerrylazzy.vercel.app)

---

## 🚀 Key Features

- 🛍️ Browse and search yarn products by type, color, or material  
- 🧵 Product detail pages with images, descriptions, and reviews  
- 🛒 Shopping cart and online checkout  
- 👤 User registration, login, and profile management  
- 📝 Order tracking and purchase history  
- 📦 Admin dashboard: manage products, view and process orders  
- 🔍 Smart search with keyword and filter options

---

## 🛠️ Technologies Used

- **Frontend**: ReactJS
- **Backend**: Node.js + Express
- **Database**: SQLServer
- **Authentication**: JWT
- **Hosting & Deployment**: Vercel

---

## 📦 Installation & Running Locally

```bash
# Clone the project
git clone github.com/trmzaiu/lerrylazzy-ecommerce.git
cd lerrylazzy-ecommerce

# Install backend dependencies
cd backend
npm install

# Configure Sequelize for SQL Server
# (Make sure to set up your .env file with DB credentials)
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

# Install frontend dependencies
cd frontend
npm install

# Go back to root directory
cd ../

# Install root dependencies (if using root-level tools like concurrently)
npm install

# Start the app (runs both frontend & backend)
npm run start

