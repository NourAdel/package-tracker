import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
import makeStyles, { ContactSupportIconStyle } from "./Style";

import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const ReportProblem = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);

  const { t } = useTranslation();
  const classes = makeStyles({ IS_RTL });
  return (
    packageData && (
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h4 className={classes.title}>{t("reportProblemTitle")}</h4>
          <button className={classes.button} type={"button"}>
            <h4 className={classes.btnText}>{t("reportProblemBTN")}</h4>
          </button>{" "}
        </div>
        <ContactSupportIcon
          sx={{
            ...ContactSupportIconStyle,
            transform: IS_RTL ? "" : "scaleX(-1)",
          }}
        />
      </div>
    )
  );
};

export default ReportProblem;
