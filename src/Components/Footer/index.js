import makeStyles from "./Style";
import { useContext } from "react";
import { AppStateContext } from "../../Context/AppStateContext";
import { PackageContext } from "../../Context/PackageContext";
import SearchBox from "../SearchBox";
import ReportProblem from "../ReportProblem";

const Footer = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);

  const classes = makeStyles({ IS_RTL });

  return (
    packageData && (
      <div className={classes.footer}>
        <SearchBox />
         <ReportProblem/>
      </div>
    )
  );
};

export default Footer;
