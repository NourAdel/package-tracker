import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "100%",
    height: 66,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "8%",
    paddingRight: "8%",
    boxSizing: "border-box",
    borderBottomWidth: 0.5,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderColor: "#ff0000",
    borderStyle: "solid",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
  },
  logo: {
    width: 88,
    height: 40,
  },
  language: {
    fontSize: 20,
    fontWeight: 800,
    color: "#ff0000",
    cursor:'pointer'
  },
}));
