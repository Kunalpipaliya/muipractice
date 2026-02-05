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
import Alertexample from './Component/Alert/Alertexample';
import SimpleBackdrop from './Component/Backdrop.jsx/Simplebackdrop';
import SimpleDialogDemo from './Component/Dialog/SimpleDialogDemo';
import AlertDialogSlide from './Component/Dialog/Dialogalert';
import CircularProgress from '@mui/material/CircularProgress';
import CircularprogressExample from './Component/Progress/CircularprogressExample';
import CircularDeterminate from './Component/Progress/CircularprogressExample';
import CircularEnableTrack from './Component/Progress/CircularTrack';
import CircularWithValueLabel from './Component/Progress/CircularValueLabel';
import LinearIndeterminate from './Component/Progress/LinearProgress';
import LinearDeterminate from './Component/Progress/LinearDeterminate';
import LinearWithValueLabel from './Component/Progress/LinearWithLabel';
import Variants from './Component/Skeleton/SkeletonExample';
import YouTube from './Component/Skeleton/SkeletonYoutube';
import SimpleSnackbar from './Component/Snackbar/Snackbar';
import AccordionUsage from './Component/Accordion/AccordionExample';
import LabelBottomNavigation from './Component/Bottom Navigation/BottomNavigationExample';
import BasicBreadcrumbs from './Component/Breadcrumb/Breadcrumb';
import TemporaryDrawer from './Component/Drawer/DrawerExample';
import PersistentDrawerLeft from './Component/Drawer/PersistentDrawer';
import SimpleListMenu from './Component/Menu/Selectedmenu';
import BasicPagination from './Component/Pagination/Pagginationexample';
import BasicSpeedDial from './Component/Speed Dial/SpeedDialExample';
import HorizontalLinearStepper from './Component/Stepper/StepperExample';
import BasicGrid from './Component/Grid/GridExample';
import FullWidthGrid from './Component/Grid/GridExample';
import Container from '@mui/material/Container';
import StandardImageList from './Component/image List/ImageListExample';
import QuiltedImageList from './Component/image List/QuiltedImagealist';
import WovenImageList from './Component/image List/WovenImageList';
import MasonryImageList from './Component/image List/MasonryImageLIst';
import TitlebarImageList from './Component/image List/ImagelistWithTitlebars';
function App() {
  return (
    <Container>

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
      <Alertexample/>
      <SimpleBackdrop/>
      <SimpleDialogDemo/>
      <AlertDialogSlide/>
      <CircularDeterminate/>
      <br />
      <CircularEnableTrack/>
      <br />
      <CircularWithValueLabel/>
      <br />
      <LinearIndeterminate/>
      <br />
      <LinearDeterminate/>
      <br />
      <LinearWithValueLabel/>
      <Variants/>
      <YouTube/>
      <SimpleSnackbar/>
      <AccordionUsage/>
      <LabelBottomNavigation/>
      <BasicBreadcrumbs/>
      <TemporaryDrawer/>
      <PersistentDrawerLeft/>
      <SimpleListMenu/>
      <BasicPagination/>
      <BasicSpeedDial/>
      <HorizontalLinearStepper/>
      <FullWidthGrid/>
      <StandardImageList/>
      <QuiltedImageList/>
      <WovenImageList/>
      <MasonryImageList/>
      <TitlebarImageList/>
    </div>
    </Container>
  );
}

export default App;
