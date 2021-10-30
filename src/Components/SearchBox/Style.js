import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: 350,
    height: 170,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: (props) => (props.WITH_DATA ? "transparent" : "#fafafa"),
    padding: 20,
    boxSizing: "border-box",
  },
  title: {
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
  },
  description: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 400,
    color: "#5e5e5e",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
  },
  input: {
    height: 35,
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "#e3e7ec",
    borderWidth: 0.5,
    borderStyle: "solid",
    paddingLeft: 10,
    paddingRight: 10,
    width: "80%",
    MozAppearance: "none",
    fontSize: 18,
    color: "#979797",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
    "&:focus": {
      borderColor: "red",
      outline: "none",
      appearance: "textfield",
    },
    "&:active": {
      borderColor: "red",
      outline: "none",
      appearance: "textfield",
    },
    "&::placeHolder": {
      color: "#979797A",
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  searchIconContainer: {
    backgroundColor: "#ff0000",
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: (props) => (props.IS_RTL ? 0 : 10),
    marginRight: (props) => (props.IS_RTL ? 10 : 0),
    cursor: "pointer",
  },
  searchIcon: {
    transform: (props) => (props.IS_RTL ? "scaleX(-1)" : ""),
  },
}));
