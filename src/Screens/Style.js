import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  bodyContainer: {
    height: "100%",
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
    alignItems: "flex-end",
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    "@media (max-width: 730px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
    },
    "@media (max-width: 900px)": {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
}));
