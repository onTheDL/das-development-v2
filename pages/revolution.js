import React from "react";
import Lottie from "react-lottie";
import CallToAction from "../src/ui/CallToAction";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

// Images
const vision = "/assets/vision.svg";
const consultation = "/assets/consultationIcon.svg";
const mockup = "/assets/mockupIcon.svg";
const review = "/assets/reviewIcon.svg";
const design = "/assets/designIcon.svg";
const build = "/assets/buildIcon.svg";
const launch = "/assets/launchIcon.svg";
const maintain = "/assets/maintainIcon.svg";
const iterate = "/assets/iterateIcon.svg";

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

export default function Revolution({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography variant="h2" style={{ fontFamily: "Pacifico" }}>
          The Revolution
        </Typography>
      </Grid>

      {/*-----VISION WITH BINOCULARS SECTION-----*/}
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoculars"
            style={{ maxWidth: "40em", marginRight: "5em" }}
          />
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography align="right" variant="h4" gutterBottom>
              Vision
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Well, they're your parents, you must know them. What are their
              common interests, what do they like to do together? No, it was The
              Enchantment Under The Sea Dance. Our first date. It was the night
              of that terrible thunderstorm, remember George? Your father kissed
              me for the very first time on that dance floor. It was then I
              realized I was going to spend the rest of my life with him.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              Stop it. No, fine, no , good, fine, good. Hello, hello, anybody
              home? Think, McFly, think. I gotta have time to recopy it. Do your
              realize what would happen if I hand in my homework in your
              handwriting? I'd get kicked out of school. You wouldn't want that
              to happen would you, would you? Go. Go. Yeah.
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="right" variant="body1" paragraph>
              It's a board with wheels. Yeah, it's 8:00.
            </Typography>
          </Grid>
          {/* <Grid item>
          <Typography variant="body1" paragraph>

          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph>

          </Typography>
        </Grid> */}
        </Grid>
      </Grid>

      {/*----- TECHNOLOGY SECTION -----*/}
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology Stack
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body1" paragraph>
              Where does he come from? It's about the future, isn't it? No. Uh,
              stories, science fiction stories, about visitors coming down to
              Earth from another planet. Shut your filthy mouth, I'm not that
              kind of girl.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Alright, punk, now- Good, you could start by sweeping the floor.
              Doc, she's beautiful. She's crazy about me. Look at this, look
              what she wrote me, Doc. That says it all. Doc, you're my only
              hope. Now that's a risk you'll have to take you're life depends on
              it. That's George McFly?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              No, why, what's a matter? Uh listen, do you know where Riverside
              Drive is? And where's my reports? I think we need a rematch. I
              followed you.
            </Typography>
          </Grid>
        </Grid>

        {/*--- Animation ---*/}
        <Grid item container justify="flex-end" lg>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>

      {/*----- THE PROCESS SECTION-----*/}
      <Grid
        item
        container
        direction="row"
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            The Process
          </Typography>
        </Grid>
      </Grid>

      {/*---Consultation Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              He's alright. Where does he come from? Listen, Doc. Oh Mom,
              there's nothing wrong with calling a boy. Oh, uh, this is my Doc,
              Uncle, Brown.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              I noticed you band is on the roster for dance auditions after
              school today. Why even bother Mcfly, you haven't got a chance,
              you're too much like your own man. No McFly ever amounted to
              anything in the history of Hill Valley. I'm gonna be at the dance.
              Um, yeah, I'm on my way. Yeah, he's right here. oh yeah, all you
              gotta do is go over there and ask her.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Whoa, whoa, Biff, what's that? Excuse me. Precisely. Whoa, this is
              heavy. Just say anything, George, say what ever's natural, the
              first thing that comes to your mind.
            </Typography>
          </Grid>
        </Grid>

        {/*---Consultation Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={consultation} alt="handshake" />
        </Grid>
      </Grid>

      {/*---Mockup Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Mockup Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={mockup} alt="website design outline" />
        </Grid>
      </Grid>

      {/*---Review Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Review Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={review} alt="magnifying glass" />
        </Grid>
      </Grid>

      {/*---Design Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67A52", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Design Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={design} alt="paintbrush with stroke" />
        </Grid>
      </Grid>

      {/*---Build Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Build Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={build} alt="construction site" />
        </Grid>
      </Grid>

      {/*---Launch Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Launch Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={launch} alt="rocket" />
        </Grid>
      </Grid>

      {/*---Maintain Block---*/}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "90em" }}
      >
        <Grid item container direction="column" lg>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Why is she gonna get angry with you? Good evening, I'm Doctor
              Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
              It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
              temporal experiment number one.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
              down, that's it. Pretty Mediocre photographic fakery, they cut off
              your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
              here, I got a life in 1985. I got a girl. And Jack Benny is
              secretary of the Treasury.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
              Progress is his middle name. What's going on? Where have you been
              all week? Uh, plutonium, wait a minute, are you telling me that
              this sucker's nuclear? Uh, you mean nobody's asked you?
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#fff", maxWidth: "20em" }}
              paragraph
            >
              Science Fiction Theater. Tab? I can't give you a tab unless you
              order something. Uh, you mean nobody's asked you? Doc? How about a
              ride, Mister?
            </Typography>
          </Grid>
        </Grid>

        {/*---Maintain Img---*/}
        <Grid item lg style={{ alignSelf: "center" }}>
          <img src={maintain} alt="wrench tightening bolts" />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}


// {/*---Iterate Block---*/}
// <Grid
// item
// container
// direction="row"
// className={classes.rowContainer}
// style={{ backgroundColor: "#B3B3B3", height: "90em" }}
// >
// <Grid item container direction="column" lg>
//   <Grid item>
//     <Typography
//       variant="h4"
//       gutterBottom
//       style={{ color: "#000", marginTop: "5em" }}
//     >
//       Iterate
//     </Typography>
//   </Grid>

//   <Grid item>
//     <Typography
//       variant="body1"
//       style={{ color: "#fff", maxWidth: "20em" }}
//       paragraph
//     >
//       Why is she gonna get angry with you? Good evening, I'm Doctor
//       Emmett Brown. I'm standing on the parking lot of Twin Pines Mall.
//       It's Saturday morning, October 26, 1985, 1:18 a.m. and this is
//       temporal experiment number one.
//     </Typography>
//     <Typography
//       variant="body1"
//       style={{ color: "#fff", maxWidth: "20em" }}
//       paragraph
//     >
//       C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get
//       down, that's it. Pretty Mediocre photographic fakery, they cut off
//       your brother's hair. whoa, whoa Doc, stuck here, I can't be stuck
//       here, I got a life in 1985. I got a girl. And Jack Benny is
//       secretary of the Treasury.
//     </Typography>
//     <Typography
//       variant="body1"
//       style={{ color: "#fff", maxWidth: "20em" }}
//       paragraph
//     >
//       Who the hell is John F. Kennedy? Re-elect Mayor Goldie Wilson.
//       Progress is his middle name. What's going on? Where have you been
//       all week? Uh, plutonium, wait a minute, are you telling me that
//       this sucker's nuclear? Uh, you mean nobody's asked you?
//     </Typography>
//     <Typography
//       variant="body1"
//       style={{ color: "#fff", maxWidth: "20em" }}
//       paragraph
//     >
//       Science Fiction Theater. Tab? I can't give you a tab unless you
//       order something. Uh, you mean nobody's asked you? Doc? How about a
//       ride, Mister?
//     </Typography>
//   </Grid>
// </Grid>

// {/*---Iterate Img---*/}
// <Grid item lg style={{ alignSelf: "center" }}>
//   <img src={iterate} alt="falling dominoes" />
// </Grid>
// </Grid>
