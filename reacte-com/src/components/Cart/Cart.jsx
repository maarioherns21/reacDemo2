import {Typography, Container, Button, Grid } from "@mui/material"
import { Root, classes } from "./Styles";
import {Link} from "react-router-dom"


export default function  Cart ({cart}) {
    console.log(cart.line_items)
    
    
    const renderEmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
          <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
      );
    
    
      const renderCart = () => (
        <>
          <Grid container spacing={3}>
            {cart.line_items.map((lineItem) => (
              <Grid item xs={12} sm={4} key={lineItem.id}>
               <h1>{lineItem.name}</h1>
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
              <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
              <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
          </div>
        </>
      );
    
    
    
        return (
          <Root>
            <Container>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
          { !cart.line_items ? renderEmptyCart() : renderCart() }
        </Container>
          </Root>
        );
    }