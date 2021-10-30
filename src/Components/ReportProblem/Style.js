import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "15%",
    minWidth: 250,
    borderColor: "#e3e3e3",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  innerContainer: {
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row" : "row-reverse"),
    alignItems: "center",
  },
  title: {
    fontFamily: "Cairo bold",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ff0000",
    height: 30,
    color: "white",
    display: "flex",
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderStyle: "none",
    alignSelf: (props) => (props.IS_RTL ? "flex-start" : "flex-end"),
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#fafafa",
      color: "black",
      borderColor: "#ff0000",
      borderStyle: "solid",
      borderWidth: 0.3,
    },
  },
  btnText: {
    fontFamily: "Cairo bold",
  },
}));
export const ContactSupportIconStyle = {
  color: "#ff0000",
  fontSize: 70,
};
