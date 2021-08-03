import React from "react";
import css from "./slider.module.css";
import Slider from "react-slick";
import  "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <img src="/images/arrow.svg" 
      className={css.arrow}
      onClick={onClick} />
    );
  }

export default function Slide() {
  const settings = {
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings} className={css.slider} >
        <div> 
         <div className={css.slider__content}>
             <div className={css.slider__left}>
             <img className={css.slider__logo} src="../../images/adidas-disney.png" alt="" />
             <h1 className={css.slider__text} >Stan Smith <span>, Forever! </span> </h1>
             <button className={css.slider__btn} >Купить</button>
             </div>
             <div className={css.slider__right}>
                 <img src="../../images/frog.png" alt="" />
             </div>
         </div>
        </div>
        <div>
        <div className={css.slider__content}>
             <div className={css.slider__left}>
             <img className={css.slider__logo} src="../../images/adidas-disney.png" alt="" />
             <h1 className={css.slider__text} >Stan Smith <span>, Forever! </span> </h1>
             <button className={css.slider__btn} >Купить</button>
             </div>
             <div className={css.slider__right}>
                 <img src="../../images/frog.png" alt="" />
             </div>
         </div>
        </div>
      </Slider>
    </div>
  );
}
