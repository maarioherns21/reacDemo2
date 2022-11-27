import Cart from "../../components/Cart/Cart";
import useFetch from "../../NewHooks/useFetch/useFetch";



export default function Home () {
const {cart} =useFetch()

return (
        <div>
         <Cart cart={cart} />
        </div>
    )
}