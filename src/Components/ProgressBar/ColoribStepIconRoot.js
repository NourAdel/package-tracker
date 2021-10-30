import { useContext } from "react";
import { PackageContext } from "../../Context/PackageContext";

import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SaveIcon from "@mui/icons-material/Save";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState, isDone }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 33,
  height: 33,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: isDone ? "green" : "#dbc107",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: isDone ? "green" : "#dbc107",
  }),
}));

export const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;
  const { packageData } = useContext(PackageContext);
  const isDone = packageData.CurrentStatus.state === "DELIVERED";
  let icons = [
    <AddTaskIcon />,
    <MoveToInboxIcon />,
    <LocalShippingIcon />,
    <SaveIcon />,
  ];

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
      isDone={isDone}
    >
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[props.icon - 1]
      )}
    </ColorlibStepIconRoot>
  );
};
