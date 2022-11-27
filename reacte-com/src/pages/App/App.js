import Home from "../Home/Home";
import { Routes, Route, BrowserRouter} from "react-router-dom"
import ProductsPage from "../ProductsPage/ProductsPage";
import Navbar from "../../components/NavBar/NavBar";
import useFetch from "../../NewHooks/useFetch/useFetch";
import Cart from "../../components/Cart/Cart";




export default function App () {   
 const {cart, handleEmptyCart, handleRemoveFromCart , handleUpdateCartQty } =useFetch()   
    return (
      <BrowserRouter>
        <div>
          <Navbar cart={cart} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<ProductsPage />} />
            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleEmptyCart={handleEmptyCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartQty={handleUpdateCartQty}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}