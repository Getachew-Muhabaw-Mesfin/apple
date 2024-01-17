import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";
import Highlight from "./components/Highlights/Highlights";
import GridProducts from "./components/Products/GridProducts";
import Carousels from "./components/Slider/Carousels";

function App() {
  return (
    <>
      <NaveBar />
      <Highlight />
      <GridProducts />
      <Carousels />
      <Footer />
    </>
  );
}

export default App;
