import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  bodyContainer: {
    width: "95%",
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    "@media (max-width: 730px)": {
      display: "flex",
      flexDirection: "column",
      padding: 0,
      marginTop: 0,
      marginBottom: 0,

    },
    "@media (max-width: 900px) and(min-width: 730px) ": {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  addressContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 70,
  },
}));
