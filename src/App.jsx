import "./App.css";
import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";
import Highlight from "./components/Highlights/Highlights";
import GridProduct from "./components/Products/GridProduct";


function App() {
  return (
    <>
      <NaveBar />
      <Highlight />
      <GridProduct />
      <Footer />
    </>
  );
}

export default App;
