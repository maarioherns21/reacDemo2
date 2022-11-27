import { useEffect, useState } from "react"
import {commerce} from "../../lib/commerce"


export default function useFetch () {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [error, setError] = useState(null);

    ///this  function Fetches the products into the main page
    const fetchProducts = async () => {
      try {
        const { data } = await commerce.products.list();

        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    ///this function fetches the cart data
    const fetchCart = async () => {
      try {
        const cart = await commerce.cart.retrieve();

        console.log("FetchCart", cart);
        setCart(cart);
      } catch (error) {
        setError(error.message);
      }
    };

    //this handle is for the Onclick to add products into the shopping Cart
    const handleAddToCart = async (productId, quantity) => {
      try {
        const response = await commerce.cart.add(productId, quantity);

        console.log("ClickingAddingToCart", cart);
        setCart(response);
      } catch (error) {
        setError(error.message);
      }
    };

     
      ///this handle click is for onclick to update more products in th eshopping cart
      const handleUpdateCartQty = async (productId, quantity) => {
        try {
          const response = await commerce.cart.update(productId, { quantity });
          console.log("this add and deletes products => ", response);
          setCart(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };

      ///this handle click is for onclick to removes  products in th eshopping cart
      const handleRemoveFromCart = async (productId) => {
        try {
          const response = await commerce.cart.remove(productId);
          console.log("this deletes the full product => ", response);
          setCart(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };

      //this empty the cart
      const handleEmptyCart = async () => {
        try {
          const response = await commerce.cart.empty();
          console.log("this empties the cart", response);
          setCart(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
    
    useEffect(() => {
        fetchProducts()
        fetchCart()
    } , []) 


    return {
        products , cart , error,  handleAddToCart , handleEmptyCart,handleRemoveFromCart , handleUpdateCartQty
    }
}