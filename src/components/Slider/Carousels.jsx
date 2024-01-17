import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import silderOne from "../../assets/images/sliders/slider-one.png";
import silderTwo from "../../assets/images/sliders/slider two.png";
import silderThree from "../../assets/images/sliders/slider-three.png";
import silderFour from "../../assets/images/sliders/slider-four.png";
import silderFive from "../../assets/images/sliders/slider-five.png";
import silderSix from "../../assets/images/sliders/slider-six.png";
import silderSeven from "../../assets/images/sliders/slider-seven.png";
import silderEight from "../../assets/images/sliders/slider-eight.png";
import silderNine from "../../assets/images/sliders/slider nine.png";
import silderTen from "../../assets/images/sliders/slider-ten.png";

const images = [
  silderOne,
  silderTwo,
  silderThree,
  silderFour,
  silderFive,
  silderSix,
  silderSeven,
  silderEight,
  silderNine,
  silderTen,
];

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
    <Slider {...settings}>
      {images.map((slider, index) => (
        <div key={index}>
          <img src={slider} alt="SilderImage" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousels;
