import makeStyles, { ContactSupportIconStyle } from "./Style";

import { useContext } from "react";

import { AppStateContext } from "../../Context/AppStateContext";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { useTranslation } from "react-i18next";
const ReportProblem = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const { t } = useTranslation();
  const classes = makeStyles({ IS_RTL });
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h4 className={classes.title}>{t("reportProblemTitle")}</h4>
        <ContactSupportIcon
          sx={{
            ...ContactSupportIconStyle,
            transform: IS_RTL ? "" : "scaleX(-1)",
          }}
        />
      </div>
      <button className={classes.button} type={"button"}>
        <h4 className={classes.btnText}>{t("reportProblemBTN")}</h4>
      </button>
    </div>
  );
};

export default ReportProblem;
