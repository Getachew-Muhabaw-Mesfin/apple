import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";
import Highlight from "./components/Highlights/Highlights";
import GridProduct from "./components/Products/GridProduct";
import Carousels from "./components/Slider/Carousels";

function App() {
  return (
    <>
      <NaveBar />
      <Highlight />
      <GridProduct />
      <Carousels />
      <Footer />
    </>
  );
}

export default App;
