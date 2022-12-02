import { styled } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

const PREFIX = "Cart";

export const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  emptyButton: `${PREFIX}-emptyButton`,
  checkoutButton: `${PREFIX}-checkoutButton`,
  link: `${PREFIX}-link`,
  cardDetails: `${PREFIX}-cardDetails`,
  content: `${PREFIX}-content`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.title}`]: {
    marginTop: "5%",
  },
  [`& .${classes.emptyButton}`]: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  [`& .${classes.checkoutButton}`]: {
    minWidth: "150px",
  },
  [`& .${classes.link}`]: {
    textDecoration: "none",
  },
  [`& .${classes.cardDetails}`]: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  [`& .${classes.content}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
