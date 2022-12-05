
import {Card,CardMedia , CardContent, CardActions, Typography,IconButton, Divider, Paper, CssBaseline } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { classes , Root} from './Styles';
import { useParams } from "react-router-dom"
import { width } from "@mui/system";



const ProductDetails = ({onAddToCart, products }) => {
const items  =useParams()
const item = products.find((item) => item.id === items.id )


if(!item) return "Loading..."

// console.log(item)

return (
  <Root>
    <div>
      <CssBaseline />
      <br />
      <br />
      <br />
        <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
          <div className={classes.card} >
          <div className={classes.imageSection} >
              <img className={classes.media} src={item.image.url} alt={item.name} />
            </div>
            <br />
            <div  className={classes.section} >
              <br />
              <Typography variant="h3" component="h2" gutterBottom>
                {item.name}
              </Typography>
              <Typography gutterBottom variant="body1" component="p" dangerouslySetInnerHTML={{ __html: item.description }}/>
              <br />
              <Typography gutterBottom variant="h6">{item.price.formatted_with_symbol}</Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography variant="body1">
                <strong>Realtime Chat - coming soon!</strong>
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography variant="body1">
                <strong>Comments - coming soon!</strong>
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
            </div>
          </div>
          <div >
           <CardActions  disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(item.id, 1)} >
              <AddShoppingCart color="primary" />
            </IconButton>
          </CardActions>
          </div>     
        </Paper>
    </div>
  </Root>
);
}

export default ProductDetails

