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
          <Route path='/shopping_cart' element={<ShoppingCart />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/shipping_address' element={<ShippingAddress />} />
          <Route path='/check_out' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
