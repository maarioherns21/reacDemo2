import Home from "../Home/Home";
import { Routes, Route, BrowserRouter} from "react-router-dom"
import ProductsPage from "../ProductsPage/ProductsPage";
import Navbar from "../../components/NavBar/NavBar";
import useFetch from "../../NewHooks/useFetch/useFetch";




export default function App () {   
 const {cart} =useFetch()   
    return (
      <BrowserRouter>
        <div>  
         <Navbar cart={cart} />
          <Routes>
           <Route path="/" exact  element={<Home />} />
           <Route path="/products" exact element={<ProductsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}