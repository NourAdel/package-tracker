import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  tableContainer: {
    transform: (props) => (props.IS_RTL ? "scaleX(-1)" : ""),
    maxHeight: 600,
    minWidth: 450,
    borderColor: "#e3e7ec",
    borderStyle: "solid",
    borderWidth: 0.5,
    borderRadius: 10,
  },
}));
