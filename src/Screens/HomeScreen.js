import { useContext } from "react";
import makeStyles from "./Style";
import { useTranslation } from "react-i18next";
import { AppStateContext } from "../Context/AppStateContext";
import { PackageContext } from "../Context/PackageContext";

import SearchBox from "../Components/SearchBox/index";
import Header from "../Components/Header";
import Table from "../Components/Table/index";
import CustomizedSteppers from "../Components/ProgressBar";
import ReportProblem from "../Components/ReportProblem";
import Address from "../Components/Address";
import Footer from "../Components/Footer";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

const HomeScreen = () => {
  const { IS_RTL, isMobileView } = useContext(AppStateContext);
  const classes = makeStyles({ IS_RTL });
  const {
    packageData,
    loading,
    setLoading,
    errorFlag,
    setErrorFlag,
    errorMessage,
  } = useContext(PackageContext);
  const { t } = useTranslation();

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
      {isMobileView && <Footer />}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={() => setLoading(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={errorFlag}
        onClose={() => setErrorFlag(false)}
        message={t(`${errorMessage}`)}
      ></Snackbar>
    </div>
  );
};

export default HomeScreen;
