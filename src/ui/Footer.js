import React from "react";
import Link from "../Link";
import { makeStyles, Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    height: "18em",
    zIndex: 1302,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "12em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "8em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "10em",
    [theme.breakpoints.down("md")]: {
      marginTop: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
      right: "0.6em",
    },
    right: "1.5em",
  },
}));

export default function Footer({
  value,
  setValue,
  selectedIndex,
  setSelectedIndex,
}) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(0)}
                component={Link}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                component={Link}
                href="/services"
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                component={Link}
                href="/customsoftware"
                className={classes.link}
              >
                Custom Software
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                component={Link}
                href="/mobileapps"
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                component={Link}
                href="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                href="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                href="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                href="/revolution"
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                onClick={() => setValue(2)}
                component={Link}
                href="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                href="/about"
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                href="/about"
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                onClick={() => setValue(3)}
                component={Link}
                href="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                onClick={() => setValue(4)}
                component={Link}
                href="/contact"
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {/* Add img here */}

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
