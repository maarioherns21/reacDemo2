import useFetch from "../../NewHooks/useFetch/useFetch";
import Products from "../../components/Products/Products"


export default function Home () {
const {products,  handleAddToCart } =useFetch()

return (
        <div>
          <Products products={products} onAddToCart={handleAddToCart} />
        </div>
    )
}