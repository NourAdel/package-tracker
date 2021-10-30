import makeStyles from "./Style";

import SearchBox from "../Components/SearchBox/index";
import Header from "../Components/Header";
import Table from "../Components/Table/index";
import { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";
import CustomizedSteppers from "../Components/ProgressBar";
import ReportProblem from '../Components/ReportProblem'
import Address from "../Components/Address";

const HomeScreen = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const classes = makeStyles({ IS_RTL });
  return (
    <div className={classes.container}>
      <Header />
      {/* 
      <CustomizedSteppers />

      <div className={classes.bodyContainer}>
        <Table />

        <SearchBox />
      </div> */}
      {/* <ReportProblem/> */}
      <Address/>
    </div>
  );
};

export default HomeScreen;
