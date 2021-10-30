import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderWidth: 0.3,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
    paddingBottom: 10,
    marginBottom: 0,
    "@media (max-width: 730px)": {
      borderWidth: 0,
      marginBottom: 20,
    },
  },
  dataContainer: {
    hieght: 30,
    display: "flex",
    flexDirection: (props) => (props.IS_RTL ? "row-reverse" : "row"),
    justifyContent: "space-around",
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderWidth: 0.3,
    width: "95%",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    flexWrap: "wrap",
    alignItems: "flex-end",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
    "@media (max-width: 730px)": {
      justifyContent: "space-between",
    },
  },
  dataLabel: {
    color: "#5e5e5e",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "Cairo bold",
  },
  stepLabel: {
    width: 60,
    textAlign: "center",
    padding: 5,
  },
}));
