import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "./images_data";

const Carousels = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings} className="">
      {images.map((slider, index) => (
        <div key={index}>
          <img src={slider} alt="SilderImage" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousels;
