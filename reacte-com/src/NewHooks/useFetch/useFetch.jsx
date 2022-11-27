import { useEffect, useState } from "react"
import {commerce} from "../../lib/commerce"


export default function useFetch () {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [error, setError]=useState(null)
    
    ///this  function Fetches the products into the main page 
    const fetchProducts = async () => {
      try {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      } catch (error) {
        setError(error.message)
      }
      };
    
      ///this function fetches the cart data 
      const fetchCart = async () => {
      try {
        const cart = await commerce.cart.retrieve()
       
        console.log("FetchCart",cart)
        setCart(cart);
      } catch (error) {
        setError(error.message)
      }
      };


      //this handle is for the Onclick to add products into the shopping Cart
      const handleAddToCart = async (productId, quantity) => {
       try {
        const item = await commerce.cart.add(productId, quantity);
        
       console.log("ClickingAddingToCart", item)
        setCart(item.cart);
       } catch (error) {
        setError(error.message)
       }
      };
    
    
    useEffect(() => {
        fetchProducts()
        fetchCart()
    } , []) 


    return {
        products , cart , error,  handleAddToCart
    }
}