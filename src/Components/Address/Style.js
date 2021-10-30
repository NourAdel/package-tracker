import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "80%",
    minWidth: 220,
    "@media (max-width: 730px)": {
      paddingLeft: 20,
      paddingRight: 20,
      width: "100%",
      boxSizing: "border-box",
    },
  },
  innerContainer: {
    width: "100%",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    borderStyle: "none",
    boxSizing: "border-box",

    padding: 10,
  },
  title: {
    fontFamily: "Cairo bold",
    width: "100%",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
  },
  address: {
    fontFamily: "'Cairo extra light'",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
    unicodeBidi: "plaintext",
  },
}));
