import makeStyles from "../Styles/searchComponentStyles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";
import i18n from "../Localization";
import { PackageContext } from "../Context/PackageContext";
const SearchBox = () => {
  const { IS_RTL, setLanguage } = useContext(AppStateContext);
  const {searchInput, setInput}= useContext(PackageContext)
  const classes = makeStyles({ IS_RTL });

  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{t("trackPackageTitle")}</h2>

      <h5 className={classes.description}>{t("trackPackageDescription")}</h5>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          placeHolder={t("trackPackagePlaceholder")}
          type={'number'}
          value={searchInput}
          onChange={e=>setInput(e.target.value)}
        />
        <div
          className={classes.searchIconContainer}
          onClick={() => setLanguage(i18n.language === "ar" ? "en" : "ar")}
        >
          <SearchRoundedIcon
            className={classes.searchIcon}
            sx={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
