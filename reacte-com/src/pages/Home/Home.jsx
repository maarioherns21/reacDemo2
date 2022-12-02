import Products from "../../components/Products/Products";
import useFetch from "../../NewHooks/useFetch/useFetch";



export default function Home () {
const {products,  handleAddToCart } =useFetch()

return (
        <div>
          <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}