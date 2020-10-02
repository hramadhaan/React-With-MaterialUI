import React, { useRef } from "react";
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "3em",
  },
  button: {
    width: "200px",
    height: "60px",
    borderRadius: "55px",
    textTransform: "capitalize",
    fontFamily: "Mulish",
    fontSize: "18px",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  illustration: {
    pointerEvents: "none",
    [theme.breakpoints.down("md")]: {
      height: "24em",
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "18em",
      marginTop: "2em",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid
          container
          alignItems={"center"}
          justify={matchesSm ? "center" : "flex-start"}
          direction="row"
        >
          <Grid
            sm
            item
            alignItems={matchesSm ? "center" : "flex-start"}
            style={{ marginLeft: matchesSm ? 0 : "2em" }}
          >
            <Typography
              style={{ textAlign: matchesSm ? "center" : "left" }}
              variant="h2"
            >
              Virtual Healthcare
              <br />
              for you
            </Typography>
            <Typography
              style={{
                textAlign: matchesSm ? "center" : "left",
                marginTop: "25px",
              }}
              variant="subtitle1"
            >
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <Grid container justify={matchesSm ? "center" : "flex-start"}>
              <Grid item>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  style={{ marginTop: "45px" }}
                >
                  Consult today
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img
              className={classes.illustration}
              style={{ marginRight: matchesSm ? 0 : "2em" }}
              alt="illustration hero"
              src={require("../assets/images/illustration.svg")}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
