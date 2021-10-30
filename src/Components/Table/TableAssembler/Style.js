import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  tableContainer: {
    transform: (props) => (props.IS_RTL ? "scaleX(-1)" : ""),
    minWidth: 450,
    borderColor: "#e3e3e3",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 10,
  },
}));
