import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import Link from "../src/Link";
import ButtonArrow from "../src/ui/ButtonArrow";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  useMediaQuery,
  Button,
  TextField,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

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
  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
    },
  },
  estimateBtn: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    padding: 8,
    marginTop: "1.5em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
      marginTop: "1.0em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
    // width: "20em",
  },
  sendBtn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

export default function Contact({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();

  // States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  //Media Queries
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  //Form Validation
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        valid ? setEmailHelper("") : setEmailHelper("Invalid email");
        break;

      case "phone":
        setPhone(event.target.value);

        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        valid ? setPhoneHelper("") : setPhoneHelper("Invalid phone entry");

        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);

    axios
      .get("https://us-central1-dasdev-site.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "An error occured.  Please try again.",
          backgroundColor: "#FF3232",
        });
      });
  };

  const buttonContents = (
    <>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </>
  );

  return (
    <Grid container direction="row">
      {/* Title Tag for SEO */}
      <Head>
        <title key="title">Contact Us | DAS Development</title>
        <meta
          name="description"
          key="description"
          content="We'll guide you through the custom software design and development process. Send us a message with your ideas or questions to get started!"
        />
      </Head>

      {/*----- FORM SECTION -----*/}
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
            </Grid>

            {/*--- Phone ---*/}
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phoneIcon.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>

            {/*--- Email ---*/}
            <Grid item container>
              <Grid item>
                <img
                  src="/assets/emailIcon.svg"
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:daniel.laserna@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    das.software.dev@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>

            {/*--- Name, Phone, Email Text Fields---*/}
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  fullWidth
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  fullWidth
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
            </Grid>

            {/* --- Message Text Field --- */}
            <Grid item style={{ width: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                value={message}
                id="message"
                placeholder="Tell us more about your project"
                onChange={(e) => setMessage(e.target.value)}
                multiline
                fullWidth
                rows={10}
              />
            </Grid>

            {/* --- Send Message Button --- */}
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendBtn}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*-----CONFIRM MESSAGE DIALOG-----*/}
      <Dialog
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Phone"
                id="phone"
                value={phone}
                fullWidth
                onChange={onChange}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                id="email"
                value={email}
                fullWidth
                onChange={onChange}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
              />
            </Grid>
          </Grid>

          {/* --- Message Text Field --- */}
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              className={classes.message}
              value={message}
              id="message"
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
              multiline
              rows={10}
            />
          </Grid>

          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em", marginBottom: "1em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendBtn}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0
                }
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Snackbar can be placed anywhere in return statement b/c toggled to make visible */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      {/*-----CALL TO ACTION SECTION----- */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        className={classes.background}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software. <br /> Exponental Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Leverage the 21st Century to your advantage.
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  className={classes.learnBtn}
                  onClick={() => {
                    setValue(1);
                    setSelectedIndex(0);
                  }}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            variant="contained"
            className={classes.estimateBtn}
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
