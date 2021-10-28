import makeStyles from "./Style";

import SearchBox from "../Components/SearchBox/index";
import Header from "../Components/Header";
import Table from "../Components/Table/index";
import { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";

const HomeScreen = () => {
  const { IS_RTL } = useContext(AppStateContext);
  const classes = makeStyles({ IS_RTL });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: window.innerHeight,
      }}
    >
      <Header />
      <div className={classes.bodyContainer}>
        <Table />
        <SearchBox />
      </div>
    </div>
  );
};

export default HomeScreen;
