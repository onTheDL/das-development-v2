import React from "react";
import Head from "next/head"
import Lottie from "react-lottie";
import CallToAction from "../src/ui/CallToAction"
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import integrationAnimation from "../src/animations/integrationAnimation/data.json";

// Images
const backArrow = "/assets/backArrow.svg";
const forwardArrow = "/assets/forwardArrow.svg";
const swiss = "/assets/swissKnife.svg";
const access = "/assets/extendAccess.svg";
const engagement = "/assets/enhanceEngagement.svg";



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
}));

export default function MobileApps({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key='title'>
          iOS/Android App Design and Development | DAS Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | With our cutting-edge mobile app development process, we build beautifully designed, carefully crafted apps for both iOS and Android."
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
              href="/customsoftware"
              onClick={() => setSelectedIndex(1)}
            >
              <img src={backArrow} alt="Back to Custom Software Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              I have to tell you about the future. When could weathermen predict
              the weather, let alone the future. You got a real attitude
              problem, McFly. You're a slacker.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              There's a slight possibility for overload. I'm sure that in 1985,
              plutonium is available at every corner drug store, but in 1955,
              it's a little hard to come by.
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Marty, I'm sorry, but I'm afraid you're stuck here.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              href="/websites"
              onClick={() => setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to Website Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/*-----Integration and CrossPlatform Section-----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{marginTop: "15em", marginBottom: "15em"}}
        className={classes.rowContainer}
      >
        {/*---Integration Block---*/}
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
              Integration
            </Typography>
          </Grid>

          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              This sounds pretty heavy. So anyway, George, now Lorraine, she
              really likes you. She told me to tell you that she wants you to
              ask her to the Enchantment Under The Sea Dance.
            </Typography>
            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
              Please, Marty, don't tell me, no man should know too much about
              their own destiny. Oh, if Paul calls me tell him I'm working at
              the boutique late tonight.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "20em" }}
            isStopped={false}
          />
        </Grid>

        {/*----- Cross-Platform Block ------*/}
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesMD ? "center" : "right"} variant="h4" gutterBottom>
              Cross-Platform Support
            </Typography>
          </Grid>

          <Grid item>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              That's for messing up my hair. Does your mom know about tomorrow
              night? Next, please. Yeah, sure, okay. Wait a minute, wait a
              minute, Doc, are you telling me that you built a time machine out
              of a delorean.
            </Typography>
            <Typography align={matchesMD ? "center" : "right"} variant="body1" paragraph>
              Don't worry. As long as you hit that wire with the connecting hook
              at precisely 88 miles per hour, the instance the lightning strikes
              the tower, everything will be fine.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*-----ICONS SECTION-----*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{marginBottom: "15em"}}
      >
        {/*---Increase Functionality Block---*/}
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography alignItems="center" variant="h4" gutterBottom>
              Increase Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>

        {/*---Extend Access Block---*/}
        <Grid item container direction="column" alignItems="center" style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0}} md>
          <Grid item>
            <Typography alignItems="center" variant="h4" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              alt="tear-one-off sign"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        
        {/*---Enhance Engagement Block---*/}
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography alignItems="center" variant="h4" gutterBottom>
              Enhance Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
