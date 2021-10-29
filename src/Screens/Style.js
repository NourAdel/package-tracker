import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  bodyContainer: {
    width: "100%",
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
    alignItems: "flex-end",
    paddingLeft: (props) => (props.IS_RTL ? 0 : "5%"),
    paddingRight: (props) => (props.IS_RTL ? "5%" : 0),
    alignItems: "center",
    marginTop: 20,
    alignSelf: "center",
    "@media (max-width: 730px)": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      marginTop: 0,
    },
    "@media (max-width: 900px) and(min-width: 730px) ": {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
}));
