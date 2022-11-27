
import { Grid } from "@mui/material"
import { classes , Root} from './Styles';
import shoe from "../../assets/shoe.jpg"
import mac from "../../assets/macbook.png"
import Product from "./Product/Product";
import useFetch from "../../NewHooks/useFetch/useFetch";



export const Products = ({onAddToCart, products}) => {


// const products =  [
//       {id: 1, name: "Shoes", description: 'running Shoes', price: '$10', image: shoe },
//       {id: 2, name: "MacBook", description: 'apple Macbook', price: "$5" , image: mac },
//   ]


   return (
     <Root>
       <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify-content="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
     </Root>
   );
 }

 export default Products