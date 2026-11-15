# KalaKart – Handmade Products Marketplace 🛍️

**KalaKart** is an online handmade products marketplace designed to support local artisans by providing them with a digital platform to showcase and sell their handcrafted products. Customers can explore products, manage wishlists, add items to their cart, place orders, and track their purchases.

The platform also provides dedicated dashboards for sellers and administrators to manage products, orders, customers, and marketplace activities.

## ✨ Features

### 👤 Customer Features
- User Registration and Login
- Secure Authentication
- Browse Handmade Products
- Search and Filter Products
- Product Categories
- Product Details
- Wishlist Management
- Shopping Cart
- Checkout
- Multiple Address Management
- Order History
- Order Tracking
- Product Reviews and Ratings
- Profile Management

### 🎨 Seller Features
- Seller Application
- Seller Dashboard
- Add, Edit and Manage Products
- Manage Product Inventory
- View Customer Orders
- Manage Order Fulfillment
- Seller Profile Management

### 🛡️ Admin Features
- Admin Dashboard
- Manage Users
- Manage Sellers
- Manage Products
- Manage Orders
- Manage Categories
- Manage Coupons
- Monitor Marketplace Activities

### 💳 Payment Features
- Razorpay Payment Integration
- Cash on Delivery
- Payment Verification
- Coupon Validation

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend Development |
| Vite | Frontend Build Tool |
| Tailwind CSS | UI Styling |
| JavaScript | Programming Language |
| Next.js | Backend API Development |
| Node.js | Runtime Environment |
| MongoDB | Database |
| Mongoose | Database Management |
| JWT | Authentication |
| Bcrypt.js | Password Hashing |
| Axios | API Communication |
| Razorpay | Online Payment |
| Cloudinary | Image Management |

## 📂 Project Structure

```text
Hand_made_products-project/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── .env.example
│   └── package.json
│
├── backend/
│   ├── app/
│   │   └── api/
│   ├── models/
│   ├── lib/
│   ├── scripts/
│   ├── .env.example
│   ├── next.config.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Hand_made_products-project-main
```

### 3. Setup the Backend

Open the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example` and configure your environment variables.

Required configuration includes:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret_key
JWT_EXPIRES_IN=7d

NODE_ENV=development
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

Start the backend:

```bash
npm run dev
```

Backend URL:

```text
http://localhost:3000
```

### 4. Setup the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using `.env.example`.

Configure:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend URL:

```
