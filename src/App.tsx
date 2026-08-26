import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import Register from './pages/register';
import VerifyAccount from './pages/verify_account';
import ResetPassword from './pages/reset_password';
import NewPassword from './pages/new_password';
import ProductDescription from './pages/product';
import ShoppingCart from './pages/shopping_cart';
import Favourites from './pages/favourite';
import ShippingAddress from './pages/shipping';
import Checkout from './pages/checkout';
import PaymentConfirmation from './pages/payment_confirmation';
import Tracking from './pages/tracking';
import Orders from './pages/order';
import StepOne from './pages/vendor/onboarding_one';
import StepTwo from './pages/vendor/onboarding_two';
import Products from './pages/vendor/products';
import SideBarLayout from './pages/vendor/layout/sideBarLayout';
import Verification from './pages/vendor/verification';
import VendorSetting from './pages/vendor/setting';
import VendorDashboard from './pages/vendor/dashboard';
import Sales from './pages/vendor/sales';
import AddProduct from './pages/vendor/add_product_one';
import ProductVariants from './pages/vendor/add_product_two';
import Category from './pages/category';
import { ToggleState } from './pages/vendor/context/toggle_context';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign_in' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/verify_account' element={<VerifyAccount />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/change_password' element={<NewPassword />} />
          <Route path='/product' element={<ProductDescription />} />
          <Route path='/categories/:category' element={<Category />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/shipping_address' element={<ShippingAddress />} />
          <Route path='/check_out' element={<Checkout />} />
          <Route path='/payment_confirmation' element={<PaymentConfirmation />} />
          <Route path='/track_order' element={<Tracking />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/vendor/onboarding/1' element={<StepOne />} />
          <Route path='/vendor/onboarding/2' element={<StepTwo />} />
          <Route element={<ToggleState />}>
            <Route element={<SideBarLayout />}>
              <Route path='/vendor/products' element={<Products />} />
              <Route path='/vendor/verification' element={<Verification />} />
              <Route path='/vendor/settings' element={<VendorSetting />} />
              <Route path='/vendor/' element={<VendorDashboard />} />
              <Route path='/vendor/sales' element={<Sales />} />
            </Route>
          </Route>
          <Route path='/vendor/add_products/1' element={<AddProduct />} />
          <Route path='/vendor/add_products/2' element={<ProductVariants />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
