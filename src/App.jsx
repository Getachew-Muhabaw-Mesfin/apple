import NaveBar from "./components/Header/NaveBar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <NaveBar />
      <Routes>
        <Route path="/" element= {<Home/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
