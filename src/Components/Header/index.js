import makeStyles from "./Style";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { ReactComponent as LogoAr } from "../../assets/Logo.svg";
import { ReactComponent as LogoEn } from "../../assets/LogoEn.svg";

import i18n from "../../Localization";
const SearchBox = () => {
  const { IS_RTL, setLanguage } = useContext(AppStateContext);
  const classes = makeStyles({ IS_RTL });

  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      {i18n.language == "en" ? (
        <LogoEn className={classes.logo} />
      ) : (
        <LogoAr className={classes.logo} />
      )}
      <h2
        className={classes.language}
        onClick={() => setLanguage(i18n.language == "en" ? "ar" : "en")}
      >
        {i18n.language == "en" ? "عربي" : "ENG"}
      </h2>
    </div>
  );
};

export default SearchBox;
