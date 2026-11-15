import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute, RoleGuard } from './components/common/ProtectedRoute';

// Public Pages
import { Home } from './pages/public/Home';
import { Shop } from './pages/public/Shop';
import { ProductDetail } from './pages/public/ProductDetail';
import { Categories } from './pages/public/Categories';
import { Artisans } from './pages/public/Artisans';
import { ArtisanDetail } from './pages/public/ArtisanDetail';
import { About, Contact, FAQ, PolicyPage } from './pages/public/StaticPages';

// Auth Pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { ForgotPassword, ResetPassword } from './pages/auth/PasswordPages';

// Customer Pages
import { Wishlist } from './pages/customer/Wishlist';
import { Cart } from './pages/customer/Cart';
import { Checkout } from './pages/customer/Checkout';
import { Orders } from './pages/customer/Orders';
import { OrderDetail } from './pages/customer/OrderDetail';
import { Profile } from './pages/customer/Profile';

// Seller Pages
import { SellerApply, SellerPending } from './pages/seller/SellerApplyAndPending';
import { SellerDashboard } from './pages/seller/SellerDashboard';
import { SellerProducts } from './pages/seller/SellerProducts';
import { SellerProductForm } from './pages/seller/SellerProductForm';
import { SellerOrders } from './pages/seller/SellerOrders';
import { SellerProfilePage } from './pages/seller/SellerProfilePage';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminSellers } from './pages/admin/AdminSellers';
import { AdminProducts, AdminOrders } from './pages/admin/AdminProductsAndOrders';
import { AdminCategories, AdminCoupons } from './pages/admin/AdminCategoriesAndCoupons';

// Policy contents
const shippingPolicyContent = (
  <>
    <p>At KalaKart, we connect you directly with authentic rural and regional artisans across India. Because each item is genuinely handmade with natural materials, gentle care is required during preparation.</p>
    <h3 className="font-serif font-bold text-base text-charcoal-900 mt-4">Dispatch Timelines</h3>
    <p>In-stock items are typically dispatched within 2-4 business days. Made-to-order handcrafted textiles, paintings, and wheel-thrown pottery may take up to 5-7 business days for creation and curing.</p>
    <h3 className="font-serif font-bold text-base text-charcoal-900 mt-4">Shipping Rates</h3>
    <p>We provide Free Express Delivery on all orders totaling ₹999 or more. For orders under ₹999, a flat nominal delivery charge of ₹99 is applied to cover plastic-conscious shockproof packaging.</p>
  </>
);

const returnPolicyContent = (
  <>
    <p>We want you to love your handcrafted treasures. In the rare event that an item arrives damaged or materially differs from the artisan description, we offer a hassle-free 7-day exchange window.</p>
    <h3 className="font-serif font-bold text-base text-charcoal-900 mt-4">Order Cancellations</h3>
    <p>You can cancel any eligible order directly through your KalaKart dashboard while it remains in "Order Placed" or "Confirmed" status. Once the artisan has dispatched the package with courier logistics, cancellations can no longer be processed.</p>
  </>
);

const privacyPolicyContent = (
  <>
    <p>Your privacy is sacred to us. KalaKart collects minimal personal information necessary to process orders, securely deliver packages, and communicate artisan updates.</p>
    <p className="mt-2">We never sell, rent, or lease customer data. Sensitive credentials such as passwords and payment signatures are protected using industry-standard hashing and encryption protocols.</p>
  </>
);

const termsContent = (
  <>
    <p>By using the KalaKart marketplace platform, you agree to cherish traditional craftsmanship, honor verified transactions, and treat our community of artisans and makers with respect.</p>
    <p className="mt-2">All handcrafted goods may exhibit natural slight variations in texture, grain, and color, which celebrate the authentic signature of the human hand.</p>
  </>
);

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
            <div className="min-h-screen flex flex-col bg-ivory text-charcoal-800 font-sans">
              <Navbar />

              <div className="flex-1">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categories/:slug" element={<Shop />} />
                  <Route path="/product/:productId" element={<ProductDetail />} />
                  <Route path="/artisans" element={<Artisans />} />
                  <Route path="/artisans/:slug" element={<ArtisanDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/shipping-policy" element={<PolicyPage title="Shipping Policy" content={shippingPolicyContent} />} />
                  <Route path="/return-policy" element={<PolicyPage title="Return & Cancellation Policy" content={returnPolicyContent} />} />
                  <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" content={privacyPolicyContent} />} />
                  <Route path="/terms" element={<PolicyPage title="Terms & Conditions" content={termsContent} />} />

                  {/* Auth Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />

                  {/* Customer Routes */}
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route
                    path="/checkout"
                    element={
                      <ProtectedRoute>
                        <Checkout />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/orders"
                    element={
                      <ProtectedRoute>
                        <Orders />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/orders/:orderId"
                    element={
                      <ProtectedRoute>
                        <OrderDetail />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/addresses"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />

                  {/* Seller Application & Onboarding */}
                  <Route
                    path="/seller/apply"
                    element={
                      <ProtectedRoute>
                        <SellerApply />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/pending"
                    element={
                      <ProtectedRoute>
                        <SellerPending />
                      </ProtectedRoute>
                    }
                  />

                  {/* Protected Seller Routes (Requires Approved Seller or Admin) */}
                  <Route
                    path="/seller/dashboard"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerDashboard />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/products"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerProducts />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/products/new"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerProductForm />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/products/:productId/edit"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerProductForm />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/orders"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerOrders />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/seller/profile"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['seller', 'admin']}>
                          <SellerProfilePage />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />

                  {/* Protected Admin Routes */}
                  <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminDashboard />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/users"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminUsers />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/sellers"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminSellers />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/products"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminProducts />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/orders"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminOrders />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/categories"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminCategories />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin/coupons"
                    element={
                      <ProtectedRoute>
                        <RoleGuard allowedRoles={['admin']}>
                          <AdminCoupons />
                        </RoleGuard>
                      </ProtectedRoute>
                    }
                  />

                  {/* Fallback */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>

              <Footer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
