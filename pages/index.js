import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Typography,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import ButtonArrow from "../src/ui/ButtonArrow";
import CallToAction from "../src/ui/CallToAction";
import animationData from "../src/animations/landinganimation/data";

const customSoftwareIcon = "/assets/customSoftware.svg";
const mobileAppsIcon = "/assets/mobileIcon.svg";
const websiteIcon = "/assets/websiteIcon.svg";
const revolutionBackground = "/assets/repeatingBackground.svg";
const infoBackground = "/assets/infoBackground.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  btnContainer: {
    marginTop: "1em",
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    padding: 8,
    marginTop: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
      marginTop: "1.0em",
    },
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "8em",
    maxWidth: 855,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  specialLetter: {
    color: theme.palette.common.orange,
  },
}));

export default function LandingPage({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {" "}
          {/*-----Hero Block -----*/}
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                <span className={classes.specialLetter}>D</span>eveloping <span className={classes.specialLetter}>A</span>wesome <span className={classes.specialLetter}>S</span>oftware <br />
                D.A.S. is good!
              </Typography>

              <Grid container justify="center" className={classes.btnContainer}>
                <Grid item>
                  <Button
                    component={Link}
                    href="/estimate"
                    className={classes.estimateBtn}
                    variant="contained"
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    component={Link}
                    href="/revolution"
                    className={classes.learnBtnHero}
                    variant="outlined"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {" "}
          {/*-----Custom Development Block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Time. Save Energy. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                component={Link}
                href="/customsoftware"
                variant="outlined"
                className={classes.learnBtn}
                onClick={() => {setValue(1); setSelectedIndex(1)}}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>

            <Grid item>
              <img
                className={classes.icon}
                src={customSoftwareIcon}
                alt="custom software icon"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {" "}
          {/*-----iOS/Android Block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />} with either mobile platform.
              </Typography>
              <Button
                component={Link}
                href="/mobileapps"
                variant="outlined"
                className={classes.learnBtn}
                onClick={() => {setValue(1); setSelectedIndex(2)}}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>

            <Grid
              item
              style={{
                marginRight: matchesSM ? 0 : "5em",
              }}
            >
              <img
                className={classes.icon}
                src={mobileAppsIcon}
                alt="mobile icon"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {" "}
          {/*-----Website Development Block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
            className={classes.serviceContainer}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines. Build for speed.
              </Typography>
              <Button
                component={Link}
                href="/websites"
                variant="outlined"
                className={classes.learnBtn}
                onClick={() => {setValue(1); setSelectedIndex(3)}}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>

            <Grid item>
              <img
                className={classes.icon}
                src={websiteIcon}
                alt="website icon"
              />
            </Grid>
          </Grid>
        </Grid>

        {/*----- Revolution Block -----*/}
        <Grid item>
          <Grid
            container
            style={{ height: "100em", marginTop: "12em" }}
            alignItems="center"
            justify="center"
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      Beta non-disclosure agreement value proposition stealth
                      launch party. Non-disclosure agreement value proposition
                      bootstrapping startup creative direct mailing strategy
                      technology funding marketing pitch holy grail influencer.
                      {/* Branding infographic accelerator first mover advantage stock analytics business-to-business learning curve return on investment bootstrapping. Infographic research & development gamification responsive web design sales traction buyer.  */}
                    </Typography>
                    <Button
                      component={Link}
                      href="/revolution"
                      className={classes.learnBtnHero}
                      variant="outlined"
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        {/*----- About and Contact Block -----*/}
        <Grid item>
          <Grid
            container
            style={{ height: "80em" }}
            direction="row"
            alignItems="center"
            className={classes.infoBackground}
          >
            <Grid
              item
              container
              style={{
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
            >
              {/*---About Subsection---*/}
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      href="/about"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnBtn}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              {/*---Contact Subsection---*/}
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say Hi!</Typography>
                  <Grid item>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      style={{ color: "white", borderColor: "white" }}
                      className={classes.learnBtn}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <div className={classes.infoBackground} /> */}
          </Grid>
        </Grid>

        {/*-----Call to Action Block-----*/}
        <Grid item>
          <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </Grid>
      </Grid>
    </>
  );
}
