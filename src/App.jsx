import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";
import Highlight from "./components/Highlights/Highlights";
import GridProducts from "./components/Products/GridProducts";
import Carousels from "./components/Slider/Carousels";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <NaveBar />
      <Highlight />
      <GridProducts />
      <Carousels />
      <Videos/>
      <Footer />
    </>
  );
}

export default App;
