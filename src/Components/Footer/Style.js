import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: (props) => (props.IS_RTL ? "flex-end" : "flex-start"),
    alignItems: "center",
    paddingLeft: "2%",
    paddingRight: "2%",
    boxSizing: "border-box",
    borderWidth: 0,
    borderTopWidth: 0.5,
    borderColor: "#ff0000",
    borderStyle: "solid",
    flexDirection: "column",
    marginBottom: 5,
  },
}));
