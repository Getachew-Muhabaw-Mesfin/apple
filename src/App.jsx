import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";

// import Highlight from "./components/Highlights/Highlights";
// import GridProducts from "./components/Products/GridProducts";
// import Carousels from "./components/Slider/Carousels";
// import Videos from "./components/Videos/Videos";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NaveBar />
      <Routes>
        <Route path="/" element= {<h1>Home</h1>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
