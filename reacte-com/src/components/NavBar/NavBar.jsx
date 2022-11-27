import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Toolbar, Badge, IconButton, Typography } from "@mui/material"
import { classes , Root} from './Styles';
import Logo from "../../assets/logos.png"



export const NavBar = ({cart}) => {
console.log(cart)
   return (
   <Root >
    <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Link to={"/"}>
          <Typography variant="h6" className={classes.title} color="inherit">
          <img  src={Logo} alt=" "  height="30px"  className={classes.image}  />
          </Typography>
          </Link>
          <Link to={"/products"}>Product Page</Link>
          <div className={classes.grow} />
        <div className={classes.button} />
        <IconButton>
          <Badge badgeContent={cart.total_items} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
   </Root>
   )
 }

 export default NavBar
