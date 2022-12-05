import { styled } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

const PREFIX = "ProductDetails";

export const classes = {
  root: `${PREFIX}-root`,
  media: `${PREFIX}-media`,
  card: `${PREFIX}-card`,
  section: `${PREFIX}-section`,
  imageSection: `${PREFIX}-imageSection`,
  recommendedPosts: `${PREFIX}-recommendedPosts`,
  imageSection: `${PREFIX}-imageSection`,
  loadingPaper: `${PREFIX}-loadingPaper`,
  cartActions: `${PREFIX}-cartActions`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.media}`]: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  [`& .${classes.card}`]: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  [`& .${classes.section}`]: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
  },
  [`& .${classes.imageSection}`]: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  [`& .${classes.recommendedPosts}`]: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  [`& .${classes.loadingPaper}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  [`& .${classes.cartActions}`]: {
    justifyContent: "space-between",
  },
}));
