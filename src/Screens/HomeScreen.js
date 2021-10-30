import makeStyles from "./Style";

import SearchBox from "../Components/SearchBox/index";
import Header from "../Components/Header";
import Table from "../Components/Table/index";
import { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";
import CustomizedSteppers from "../Components/ProgressBar";
import ReportProblem from "../Components/ReportProblem";
import Address from "../Components/Address";
import { PackageContext } from "../Context/PackageContext";
import Footer from "../Components/Footer";
const HomeScreen = () => {
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const { packageData } = useContext(PackageContext);
  const classes = makeStyles({ IS_RTL });
  return (
    <div className={classes.container}>
      <Header />
      <CustomizedSteppers />
      {isMobileView && <Address />}
      <div className={classes.bodyContainer}>
        <Table />

        <div className={classes.addressContainer}>
          {!isMobileView ? (
            <>
              <Address />
              <ReportProblem />
              <SearchBox />
            </>
          ) : isMobileView && !packageData ? (
            <SearchBox />
          ) : null}
        </div>
      </div>
      Ï{isMobileView && <Footer />}
    </div>
  );
};

export default HomeScreen;
