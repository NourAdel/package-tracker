import SearchBox from "../Components/SearchBox/index";
import Header from '../Components/Header'
const HomeScreen = () => {
  return (
    <div style={{display:"flex",  flexDirection:'column',  height:window.innerHeight}}>
      <Header/>
      <SearchBox />
    </div>
  );
};

export default HomeScreen;
