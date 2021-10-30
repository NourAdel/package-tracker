import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
import makeStyles from "./Style";

const Address = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);

  const classes = makeStyles({ IS_RTL });
  const { t } = useTranslation();
  return (
    packageData && (
      <div className={classes.container}>
        <h4 className={classes.title}>{t("addressTitle")}</h4>

        <div className={classes.innerContainer}>
          <h5 className={classes.address}>{t("address")}</h5>
        </div>
      </div>
    )
  );
};

export default Address;
