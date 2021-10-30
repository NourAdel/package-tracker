import makeStyles from "./Style";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
import SearchBox from "../SearchBox";
import Address from "../Address";
import ReportProblem from "../ReportProblem";

const Footer = () => {
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);

  const classes = makeStyles({ IS_RTL });

  return (
    packageData && (
      <div className={classes.footer}>
        <SearchBox />
        {isMobileView &&  <ReportProblem/>}
      </div>
    )
  );
};

export default Footer;
