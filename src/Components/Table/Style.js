import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "100%",
    textAlign: (props) => (props.IS_RTL ? "right" : "left"),
  },
  tableContainer: {
    transform: (props) => (props.IS_RTL ? "scaleX(-1)" : ""),
    minWidth: 450,
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  title:{
    fontFamily:" Cairo regular"
}
}));
