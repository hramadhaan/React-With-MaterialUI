import React from "react";
import {
  useScrollTrigger,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { useMediaQuery, useTheme, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tab: {
    ...theme.typography.tab,
    textTransform: "capitalize",
    minWidth: 10,
    marginLeft: "25px",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  logo: {
    marginLeft: 25,
  },
  drawerIconContainer: {
    marginLeft: "auto",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        indicatorColor="transparent"
        value={0}
      >
        <Tab disableRipple label="Home" className={classes.tab} />
        <Tab disableRipple label="Find a doctor" className={classes.tab} />
        <Tab disableRipple label="Apps" className={classes.tab} />
        <Tab disableRipple label="Testimonials" className={classes.tab} />
        <Tab disableRipple label="About Us" className={classes.tab} />
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer>
        <div className={classes.toolbarMargin} />
        <List>
          <ListItem>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer}>
        <Menu />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color="white" position="fixed">
          <Toolbar disableGutters>
            <img
              className={classes.logo}
              alt="logo trafalagar"
              src={require("../assets/images/logo.svg")}
            />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Navbar;
