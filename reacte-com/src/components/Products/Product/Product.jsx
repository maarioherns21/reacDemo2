import {Card,CardMedia , CardContent, CardActions, Typography,IconButton } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { classes , Root} from './Styles';
import useFetch from "../../../NewHooks/useFetch/useFetch";




const Product = ({product, onAddToCart}) => {



return (
  <Root>
     <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Link to={`/product/${product.id}`} className={classes.link} >
             <Typography  gutterBottom variant="body1" component="h2">
              {product.name}
            </Typography>
            </Link>
            <Typography gutterBottom variant="body1" component="h2">
            {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
  </Root>
);

}

export default Product