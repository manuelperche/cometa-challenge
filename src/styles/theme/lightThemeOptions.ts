import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#F7F7F7",
    },
    // text: {
    //   default: "#FFF"
    // },
    mode: "light",
  },
  typography: {
    h6: {
      fontWeight: 400,
      fontSize: "17px",
    },
    subtitle1: {
      fontSize: "14px",
    },
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
      fontSize: "11px"
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
            color: "#C4C4C4",
          },
        },
        expandIconWrapper: {
          color: "#A9A9A9",
        },
      },
    },
  },
};

export default lightThemeOptions;
