import { useContext } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddTaskIcon from "@mui/icons-material/AddTask";
import SaveIcon from "@mui/icons-material/Save";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

import { useTranslation } from "react-i18next";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
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
    backgroundColor: "green",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "green",
  }),
}));

const ColorlibStepIcon = (props) => {
  const { active, completed, className } = props;
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
    >
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[props.icon - 1]
      )}
    </ColorlibStepIconRoot>
  );
};

const ProgressBar = () => {
  const { t } = useTranslation();
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);
  let steps = [
    t("TICKET_CREATED"),
    t("PACKAGE_RECEIVED"),
    t("OUT_FOR_DELIVERY"),
    t("DELIVERED"),
  ];

  const activeStep = () => {
    switch (packageData.CurrentStatus.state) {
      case "TICKET_CREATED":
        return 0;
      case "PACKAGE_RECEIVED":
        return 1;
      case "DELIVERED":
        return 4;
      default:
        return 2;
    }
  };

  return (
    packageData && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderColor: "#e3e3e3",
          borderStyle: "solid",
          borderWidth: isMobileView ? 0 : 0.3,
          borderRadius: 10,
          marginTop: 20,
          // justifyContent:"center",
          alignItems: "center",
          width: "95%",
          alignSelf: "center",
          paddingBottom: 10,
          marginBottom: isMobileView ? 20 : 0,
        }}
      >
        <div
          style={{
            hieght: 30,
            display: "flex",
            flexDirection: IS_RTL ? "row-reverse" : "row",
            justifyContent: isMobileView ? "space-between" : "space-around",
            borderColor: "#e3e3e3",
            borderStyle: "solid",
            borderWidth: 0.3,
            width: "95%",
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            flexWrap: "wrap",
            alignItems: "flex-end",
            textAlign: IS_RTL ? "right" : "left",
          }}
        >
          <div>
            <h5 style={{ color: "#5e5e5e", fontSize: 12, fontWeight: 600 }}>
              {t("packageNumber")} {packageData?.TrackingNumber}
            </h5>{" "}
            <h5>{t(`${packageData?.CurrentStatus.state}`)}</h5>
          </div>
          <div>
            <h5 style={{ color: "#5e5e5e", fontSize: 12, fontWeight: 600 }}>
              {t("lastUpdate")}
            </h5>{" "}
            <h5>{packageData?.CurrentStatus.timestamp}</h5>
          </div>
          <div>
            <h5 style={{ color: "#5e5e5e", fontSize: 12, fontWeight: 600 }}>
              {t("shipper")}
            </h5>{" "}
            <h5>Souq.com</h5>
          </div>
          {packageData?.PromisedDate && (
            <div>
              <h5 style={{ color: "#5e5e5e", fontSize: 12, fontWeight: 600 }}>
                {t("promisedDate")}
              </h5>{" "}
              <h5>{packageData?.PromisedDate}</h5>
            </div>
          )}
        </div>
        <Stack
          sx={{
            width: isMobileView ? "10%" : "90%",
            marginTop: 3,
            marginLeft: isMobileView ? 2 : 0,
            marginRight: isMobileView ? 2 : 0,

            alignSelf: !isMobileView
              ? "center"
              : IS_RTL
              ? "flex-end"
              : "flex-start",
          }}
          spacing={4}
          dir={IS_RTL ? "rtl" : "ltr"}
        >
          <Stepper
            activeStep={activeStep()}
            orientation={isMobileView ? "vertical" : "horizontal"}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <div
                    style={{
                      width: 60,
                      textAlign: "center",
                      padding: 5,
                    }}
                  >
                    {label}
                  </div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </div>
    )
  );
};

export default ProgressBar;
