import { createMuiTheme } from '@material-ui/core/styles';

const dasBlue = '#0B72B9'
const dasOrange = '#FFBA60'
const dasGrey = '#868686'

export default createMuiTheme({
  palette: {
    common: {
      blue: `${dasBlue}`,
      orange: `${dasOrange}`
    },
    primary: {
      main: `${dasBlue}`
    },
    secondary: {
      main: `${dasOrange}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: dasBlue,
      lineHeight: 1.5
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: dasBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: dasBlue,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Raleway",
      color: dasBlue,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: dasGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    body1: {
      fontSize: "1.25rem",
      color: dasGrey,
      fontWeight: 300,
    },
    learnBtn: {
      borderColor: dasBlue,
      borderWidth: 2,
      textTransform: "none",
      color: dasBlue,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: dasBlue,
        fontSize: "1rem",
      }
    },
    MuiInput: {
      root: {
        color: dasBlue,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${dasBlue}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${dasBlue}`
        },
      },
    },
  }
})
