import logo from './logo.svg';
import './App.css';
import Combobox from './Component/Autocomplete/Combobox';
import Grouped from './Component/Autocomplete/Grouped';
import Tags from './Component/Autocomplete/Tags';
import Basicbutton from './Component/Button/Basicbutton';
import Color from './Component/Button/Color';
import Iconbtn from './Component/Button/Iconbtn';
import Loading from './Component/Button/Loading';
import Badge from './Component/Button/Badge';
import Badgeexample from './Component/Button/Badge';
import Icons from './Component/CheckBox/Icons';
import BasicFAB from './Component/Floating action button/BasicFAB';
import FloatingActionButtonZoom from './Component/Floating action button/Animation';
import BasicRating from './Component/Rating/BasicRating';
import RatingPrecision from './Component/Rating/RatingPrecision';
import HoverRating from './Component/Rating/HoverRating';
function App() {
  return (
    <div className="App">
      <Combobox />
      <Grouped />
      <Tags />
      <Basicbutton />
      <Color />
      <Iconbtn />
      <Loading/>
      <Badgeexample/>
      <Icons/>
      <BasicFAB/>
      <FloatingActionButtonZoom/>
      <BasicRating/>
      <RatingPrecision/>
      <HoverRating/>
    </div>
  );
}

export default App;
