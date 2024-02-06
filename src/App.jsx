import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/404/PageNotFound";
import Iphones from "./Pages/Iphone/Iphones";
import VisionPro from "./Pages/VisionPro/VisionPro";
import SharedLayout from "./Pages/SharedLayout";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="iphones" element={<Iphones />} />
          <Route path="visionPro" element={<VisionPro />} />
          <Route path="iphone/:productId" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
