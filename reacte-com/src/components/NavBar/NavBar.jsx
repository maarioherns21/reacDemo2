import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Toolbar, Badge, IconButton, Typography } from "@mui/material"
import { classes , Root} from './Styles';
import Logo from "../../assets/logos.png"



export const NavBar = ({cart}) => {
// console.log(cart)
const location  = useLocation();

   return (
   <Root >
    <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
           <Typography component={Link} to={"/"} variant="h6" className={classes.title} color="inherit">
          <img src={Logo} alt=" "  height="50px"  className={classes.image} />
          </Typography>
          <Link className={classes.link} to={"/"}>Product Page</Link>
          <div className={classes.grow} />
          {location.pathname === "/" && (
        <div className={classes.button} >
        <IconButton component={Link} to="/cart" aria-label="Shoow carrtt items" color="inherit" >
          <Badge badgeContent={cart.total_items} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        </div> )}
        </Toolbar>
      </AppBar>
   </Root>
   )
 }

 export default NavBar
