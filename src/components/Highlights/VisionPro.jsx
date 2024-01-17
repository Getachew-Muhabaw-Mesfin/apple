import "./Highlight.css";
import Link from "../Link/Link"
import visonPro from "../../assets/images/logos/hero_logo_apple_vision_pro___large.png"
const VisionPro = () => {
  return (
    <section className="vision_pro">
      <div className="container text-dark">
        <img src={visonPro} alt="Vision Pro" className="img-fluid " />
        <h2 className="bold black ">
          Welcome to the era of spatial computing.
        </h2>
        <p className="lead fw-bold text-muted h4">Pre-order starting 1.19 at 5:00 a.m. PT <br />Available starting 2.2</p>
        <Link />
      </div>
    </section>
  );
};

export default VisionPro;
