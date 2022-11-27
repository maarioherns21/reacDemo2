import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { classes, Root } from "./style"


const CartItem = ({item}) => {

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
             <Button type="button" size="small">-</Button>
             <Typography>{item.quantity}</Typography>
             <Button type="button" size="small">+</Button>
            </div>
            <Button variant="contained" type="button" color="secondary" size="small">remove</Button>
          </CardActions>
        </Card>
      </Root>
    );
}

export default CartItem

////tomorrrow is addingg functionality to the  + and minus buttons  / today i fixed some stuff in regard to the cart  passing the data