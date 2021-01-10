import React from "react";
import Head from "next/head";
import CallToAction from "../src/ui/CallToAction";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
}));

export default function About({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      {/* SEO */}
      <Head>
        <title key="title">About Us - History | DAS Development</title>
        <meta
          name="description"
          key="description"
          content="We provide one of the fastest, most modern, affordable, and aesthetic software design and development services in North America. Get a free online estimate now!"
        />
      </Head>

      {/*-----MISSION SECTION-----*/}
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "2em" : "5em" }}
      >
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Our Mission
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "2em" }}
      >
        <Typography
          variant="h4"
          className={classes.missionStatement}
          align="center"
        >
          Marty, I'm sorry, but the only power source capable of generating one
          point twenty-one gigawatts of electricity is a bolt of lightning.
          Mayor Goldie Wilson, I like the sound of that. Let me show you my plan
          for sending you home. Please excuse the crudity of this model, I
          didn't have time to build it to scale or to paint it. Yeah, exactly.
        </Typography>
      </Grid>

      {/*-----HISTORY SECTION-----*/}
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "12em", marginBottom: "18em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h2"
              gutterBottom
            >
              Our History
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
              align={matchesMD ? "center" : undefined}
            >
              I'm really gonna miss you, Marty.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              That I'm gonna have a chance to travel through time. It's going to
              be really hard waiting 30 years before I could talk to you about
              everything that's happened in the past few days.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              You know Marty, I'm gonna be very sad to see you go. You've really
              mad a difference in my life, you've given me something to shoot
              for. Just knowing, that I'm gonna be around to se 1985, that I'm
              gonna succeed in this.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Uh, does it run on regular unleaded gasoline? Okay, alright, I'll
              prove it to you. Look at my driver's license, expires 1987. Look
              at my birthday, for crying out load I haven't even been born yet.
              And, look at this picture, my brother, my sister, and me. Look at
              the sweatshirt, Doc, class of 1984.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This is uh, this is heavy duty, Doc, this is great.
            </Typography>
          </Grid>
        </Grid>

        {/*---History Img---*/}
        <Grid item container justify="center" lg>
          <img
            src="/assets/history.svg"
            alt="quill pen above open book"
            style={{ maxHeight: matchesMD ? "15em" : "22em" }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}
