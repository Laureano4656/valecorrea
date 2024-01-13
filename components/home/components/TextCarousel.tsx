import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface Props {
  texts: Array<string>;
}
const TextCarousel: React.FC<Props> = ({ texts }) => {
  const generateResponsiveSettings = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      responsive: [],
    };

    for (let breakpoint = 400; breakpoint <= 4000; breakpoint += 100) {
      settings.responsive.push({
        breakpoint: breakpoint,
        settings: {
          slidesToShow: Math.ceil(breakpoint / 250) + 1,
        },
      });
    }

    return settings;
  };

  const settings = generateResponsiveSettings();

  return (
    <div className="relative w-full ">
      <div className="absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <Slider {...settings}>
          {texts.map((text, index) => (
            <div key={index}>
              <h3 className="text-4xl leading-none text-center font-playfair">{text}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TextCarousel;
