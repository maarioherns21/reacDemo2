import {Typography, Container, Button, Grid } from "@mui/material"
import { Root, classes } from "./Styles";
import {Link} from "react-router-dom"
import CartItem from "./CartItem/CartItem";


export default function  Cart ({cart,  handleEmptyCart, handleRemoveFromCart , handleUpdateCartQty}) {
  
  const EmptyCart = async () => await handleEmptyCart();
    
    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
          <Link className={classes.link} to="/products">start adding some</Link>!
        </Typography>
      );
    
      if (!cart.line_items) return 'Loading..';
      //  console.log(cart.line_items)
       
      const renderCart = () => (
        <>
          <Grid container spacing={3}>
            {cart.line_items.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
               <CartItem  item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveCartQty={handleRemoveFromCart} />
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
              <Button className={classes.emptyButton}  size="large" type="button" variant="contained" color="secondary" onClick={EmptyCart}>Empty cart</Button>
              <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
          </div>
        </>
      );
    
    
        return (
          <Root>
            <Container>
          <div className={classes.content} />
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </Container>
          </Root>
        );
    }