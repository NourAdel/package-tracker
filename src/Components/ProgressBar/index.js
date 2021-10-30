import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
import makeStyles from "./Style";
import { ColorlibStepIcon } from "./ColoribStepIconRoot";

import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const ProgressBar = () => {
  const { t } = useTranslation();
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);
  const classes = makeStyles({ IS_RTL });
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

  const getDateString = (promisedDate) => {
    const date = new Date(promisedDate);
    const stringDate =
      date.getUTCDate() +
      "/" +
      date.getUTCMonth() +
      "/" +
      date.getUTCFullYear();
    return stringDate;
  };

  return (
    packageData && (
      <div className={classes.container}>
        <div className={classes.dataContainer}>
          <div>
            <h5 className={classes.dataLabel}>
              {t("packageNumber")} {packageData.TrackingNumber}
            </h5>{" "}
            <h5 className={classes.data}>
              {t(`${packageData.CurrentStatus.state}`)}
            </h5>
          </div>
          <div>
            <h5 className={classes.dataLabel}>{t("lastUpdate")}</h5>{" "}
            <h5 className={classes.data}>
              {getDateString(packageData.CurrentStatus.timestamp)}
            </h5>
          </div>
          <div>
            <h5 className={classes.dataLabel}>{t("shipper")}</h5>{" "}
            <h5 className={classes.data}>Souq.com</h5>
          </div>
          {packageData.PromisedDate && (
            <div>
              <h5 className={classes.dataLabel}>{t("promisedDate")}</h5>{" "}
              <h5 className={classes.data}>
                {getDateString(packageData.PromisedDate)}
              </h5>
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
                  <div className={classes.stepLabel}>{label}</div>
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
