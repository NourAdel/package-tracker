import makeStyles from "./Style";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { ReactComponent as LogoAr } from "../../assets/Logo.svg";
import { ReactComponent as LogoEn } from "../../assets/LogoEn.svg";

const SearchBox = () => {
  const { IS_RTL, setLanguage, appLanguage } = useContext(AppStateContext);
  const classes = makeStyles({ IS_RTL });

  return (
    <div className={classes.container}>
      {appLanguage === "en" ? (
        <LogoEn className={classes.logo} />
      ) : (
        <LogoAr className={classes.logo} />
      )}
      <h2
        className={classes.language}
        onClick={() => setLanguage(appLanguage === "en" ? "ar" : "en")}
      >
        {appLanguage === "en" ? "عربي" : "ENG"}
      </h2>
    </div>
  );
};

export default SearchBox;
