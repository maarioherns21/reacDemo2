import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const PREFIX = "CartItem";

export const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  cardContent: `${PREFIX}-cardContent`,
  cartActions: `${PREFIX}-cartActions`,
  link: `${PREFIX}-link`,
  buttons: `${PREFIX}-buttons`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.media}`]: {
    height: 260,
  },
  [`& .${classes.cardContent}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  [`& .${classes.cartActions}`]: {
    justifyContent: 'space-between',
  },
  [`& .${classes.link}`]: {
    textDecoration: "none",
  },
  [`& .${classes.buttons}`]: {
    display: 'flex',
    alignItems: 'center',
  },
}));
