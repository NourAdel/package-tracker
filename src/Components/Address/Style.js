import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "15%",
    minWidth: 250,
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    borderStyle: "none",
    padding:10
  },
  address: {
    fontFamily: "'Cairo extra light'",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
    unicodeBidi:"plaintext"
  },
}));
