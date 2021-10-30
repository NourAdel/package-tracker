import makeStyles from "./Style";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { ReactComponent as LogoAr } from "../../assets/Imgs/Logo.svg";
import { ReactComponent as LogoEn } from "../../assets/Imgs/LogoEn.svg";
import { PackageContext } from "../../Context/PackageContext";

const SearchBox = () => {
  const { IS_RTL, setLanguage, appLanguage } = useContext(AppStateContext);
  const { reset } = useContext(PackageContext);

  const classes = makeStyles({ IS_RTL });

  return (
    <div className={classes.container}>
      {appLanguage === "en" ? (
        <LogoEn className={classes.logo} onClick={() => reset()} />
      ) : (
        <LogoAr className={classes.logo} onClick={() => reset()} />
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
