import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { classes, Root } from "./style"


const CartItem = ({item, onUpdateCartQty, onRemoveCartQty }) => {

  // console.log("==>" ,item)
if(!item.quantity) return "Loading..."
// if (!cart.line_items) return 'Loading..';

    return (
      <Root>
        <Card>
          <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
          <CardContent className={classes.cardContent}  >
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body1"> {item.line_total.formatted_with_symbol}</Typography>
          </CardContent>
          <CardActions className={classes.cartActions}>
            <div className={classes.buttons} >
             <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity -1)} >-</Button>
             <Typography>{item.quantity}</Typography>
             <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
            </div>
            <Button variant="contained" type="button" color="inherit" size="small"  onClick={() => onRemoveCartQty(item.id)} >remove</Button>
          </CardActions>
        </Card>
      </Root>
    );
}

export default CartItem

////tomorrrow is addingg functionality to the  + and minus buttons  / today i fixed some stuff in regard to the cart  passing the datas