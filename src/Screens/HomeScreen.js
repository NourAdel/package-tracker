import SearchBox from "../Components/SearchBox/index";
import Header from '../Components/Header'
import Table from '../Components/Table/index'
const HomeScreen = () => {
  return (
    <div style={{display:"flex",  flexDirection:'column',  height:window.innerHeight}}>
      <Header/>
      <SearchBox />
      <Table/>
    </div>
  );
};

export default HomeScreen;
