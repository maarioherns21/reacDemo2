import { styled } from "@mui/material/styles";
// import { alpha } from "@mui/material/styles";

const PREFIX = "Products";

export const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
  toolbar: `${PREFIX}-toolbar`,
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.content}`]: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: 'inline-block',
    justifyContent: 'flex-end',
    margin: '0 0 4px 4px',
    letterSpacing: 'normal',
    boxSizing: 'border-block',
    verticalAlign: 'top',
  },
  [`& .${classes.toolbar}`]: {
    toolbar: theme.mixins.toolbar,
    padding: theme.spacing(5)
  },
}));


