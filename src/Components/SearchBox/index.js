import makeStyles from "./Style";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
const SearchBox = () => {
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { searchInput, setInput, getPackageData, packageData } =
    useContext(PackageContext);
  const classes = makeStyles({ IS_RTL });

  const { t } = useTranslation();
  return  (
    <div className={ classes.container}>
      <h2 className={classes.title}>{t("trackPackageTitle")}</h2>
      <h5 className={classes.description}>{t("trackPackageDescription")}</h5>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          placeholder={t("trackPackagePlaceholder")}
          type={"number"}
          value={searchInput}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          className={classes.searchIconContainer}
          onClick={() => getPackageData()}
        >
          <SearchRoundedIcon
            className={classes.searchIcon}
            sx={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  ) ;
};

export default SearchBox;
