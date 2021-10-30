import { useTranslation } from "react-i18next";
import { useContext } from "react";
import makeStyles from "./Style";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBox = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const { searchInput, setInput, getPackageData, packageData } =
    useContext(PackageContext);
  const classes = makeStyles({ IS_RTL, WITH_DATA: packageData !== null });

  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{t("trackPackageTitle")}</h2>
      <h5 className={classes.description}>{t("trackPackageDescription")}</h5>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          placeholder={t("trackPackagePlaceholder")}
          type={"number"}
          value={searchInput}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              getPackageData();
            }
          }}
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
  );
};

export default SearchBox;
