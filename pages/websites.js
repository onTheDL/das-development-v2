import React from "react";
import Head from "next/head";
import CallToAction from "../src/ui/CallToAction";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

// Images
const backArrow = "/assets/backArrow.svg";
const forwardArrow = "/assets/forwardArrow.svg";
const analytics = "/assets/analytics.svg";
const seo = "/assets/seo.svg";
const outreach = "/assets/outreach.svg";
const ecommerce = "/assets/ecommerce.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

export default function Websites({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      {/* SEO */}
      <Head>
        <title key="title">
          Stunning Custom Website Design | DAS Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
      </Head>
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              href="/mobileapps"
              onClick={() => setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Back to iOS/Android Apps Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Quiet, quiet. I'm gonna read your thoughts. Let's see now, you've
              come from a great distance? Right, George. Well, good luck you
              guys. Oh, one other thing, if you guys ever have kids and one of
              them when he's eight years old, accidentally sets fire to the
              living room rug, be easy on him. Marty, are you alright? Just
              finishing up the second coat now. Leave me alone.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Oh no, don't touch that. That's some new specialized weather
              sensing equipment.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Thanks a lot, kid. I have a feeling too. I have to tell you about
              the future. Alright, alright, okay McFly, get a grip on yourself.
              It's all a dream. Just a very intense dream. Woh, hey, listen, you
              gotta help me.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href="/services"
              onClick={() => setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to the Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/*----- Analytics -----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          {/* Grid container wrapped by Grid item b/c easier to align from above container(i.e. justify, alignItems). Otherwise, will take up 100% of the width if use Grid item container */}
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: "-2.75em" }}
                alt="graph with magnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? "center" : undefined} variant="body1">
            Einstein, come here, boy. It says here that a bolt of lightning is
            gonna strike the clock tower precisely at 10:04 p.m. next Saturday
            night.
          </Typography>
        </Grid>
      </Grid>

      {/*-----Ecommerce -----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="globe outlined with dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            C'mon, c'mon let's go. What's going on?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Where have you been all week? I have to ask Lorraine out but I don't
            know how to do it.
          </Typography>
        </Grid>
      </Grid>

      {/*-----Outreach Block-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : undefined}
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Uh, plutonium, wait a minute, are you telling me that this sucker's
            nuclear? Hey George, heard you laid out Biff, nice going.
          </Typography>
        </Grid>
      </Grid>

      {/*-----SEO Block-----*/}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        className={classes.rowContainer}
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="website on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Hey, Doc, we better back up, we don't have enough roads to get up to
            88. Alright, let's set your destination time. This is the exact time
            you left?
          </Typography>
          <Typography
            variant="body1"
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            Save the clock tower, save the clock tower.
          </Typography>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
