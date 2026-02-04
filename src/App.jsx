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
import Checkmarks from './Component/Select/Checkmarks';
import Chip from './Component/Select/Chip';
import Chipexample from './Component/Select/Chip';
import WithDialoug from './Component/Select/WithDialoug';
import ContinuosSlider from './Component/Slider/ContinuosSlider';
import MusicPlayerSlider from './Component/Slider/MusicplaySlider';
import BasicSwitches from './Component/Switch/BasicSwitchs';
import CustomizedSwitches from './Component/Switch/CustomizedSwitch';
import TransferList from './Component/Transfer List/BasicTransferList';
import ImageAvatar from './Component/Avatar/ImageAvatar';
import Groupedexample from './Component/Avatar/Grouped';
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
      <Checkmarks/>
      <Chipexample/>
      <WithDialoug/>
      <ContinuosSlider/>
      <MusicPlayerSlider/>
      <BasicSwitches/>
      <CustomizedSwitches/>
      <TransferList/>
      <ImageAvatar/>
      <Groupedexample/>
    </div>
  );
}

export default App;
