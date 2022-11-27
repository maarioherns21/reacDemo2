import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles'


const PREFIX = 'NavBar';

export const classes = {
  root: `${PREFIX}-root`,
  appBar: `${PREFIX}-appBar`,
  title: `${PREFIX}-title`,
  image: `${PREFIX}-image`,
  menuButton: `${PREFIX}-menuButton`,
  grow: `${PREFIX}-grow`,
  search: `${PREFIX}-search`,
  searchIcon : `${PREFIX}-searchIcon`,
  inputRoot: `${PREFIX}-inputRoot`,
  inputInput: `${PREFIX}-inputInput`,
  link: `${PREFIX}-link`,
}


export const Root = styled('div')(({ theme }) => ({
 [`&.${classes.root}`]: {
   display: 'flex',
   alignItems: 'center',
   backgroundColor: theme.palette.primary.main
 },
 [`& .${classes.appBar}`]: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
 },
 [`& .${classes.title}`]: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
 },
 [`& .${classes.image}`]: {
    marginRight: "20px",
  },
  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  [`& .${classes.grow}`]: {
    flexGrow: 1,
  },
  [`& .${classes.search}`]: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  [`& .${classes.searchIcon}`]: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  [`& .${classes.inputRoot}`]: {
    color: "inherit",
  },
  [`& .${classes.inputInput}`]: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  [`& .${classes.link}`]: {
    textDecoration: "none",
    color: "black",
  },
}))