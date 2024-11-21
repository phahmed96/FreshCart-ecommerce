import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import sliderImg1 from '../../assets/images/slider-image-1.jpeg'
import sliderImg2 from '../../assets/images/slider-image-2.jpeg'
import sliderImg3 from '../../assets/images/slider-image-3.jpeg'
import sliderImg4 from '../../assets/images/grocery-banner-2.jpeg'
import sliderImg5 from '../../assets/images/grocery-banner.png'
import sliderImg6 from '../../assets/images/slider-2.jpeg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} arrows={false}>
      <div>
       <img className="w-full h-80"  src={sliderImg1} alt="" />

      </div>
      <div>
       
      <img className="w-full h-80" src={sliderImg2} alt="" />

      </div>
      <div>
       
      <img className="w-full h-80" src={sliderImg3} alt="" />

      </div>
      <div>
      <img className="w-full h-80" src={sliderImg4} alt="" />


      </div>
      <div>
      <img className="w-full h-80" src={sliderImg5} alt="" />


      </div>
      <div>
      <img className="w-full h-80" src={sliderImg6} alt="" />

      </div>
    </Slider>
  );
}