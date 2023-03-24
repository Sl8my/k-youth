import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
// Swiper slider imported
import SwiperCore, {
  Navigation,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import WOW from 'wowjs';
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import '../../../assets/css/animate.css';
// image import
// import HeroIMG1 from "../../../assets/images/hero/hero-figure1.png";
import HeroIMG1 from "../../../assets/images/risottata/Locandina-risottata.jpg";
import HeroIMG2 from "../../../assets/images/shapes/hero-animi-blu.png";
import ImageShape from "../../../assets/images/shapes/hero-shape-blu.png";

import RazzoSVG from "../../../assets/images/risottata/Razzo-rosso-svg.svg";

import TikOcchiolino from "../../../assets/images/risottata/Tik-occhiolino.svg";

// install Swiper modules
SwiperCore.use([ Navigation]);
class HeroArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  componentDidMount(){
      new WOW.WOW().init()
  }
  changeDatepickerHaldeller = (date) => {
    this.setState({ startDate: date });
  };
  render() {
    const startDate = this.state.startDate;
    const sliderInit = {
      slidesPerView: 1,
      loop: true,
      speed: 2400,
      effect: "slide",
      nav: "true",
      autoplay: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".hero-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          function numberAppend(d) {
            return d < 10 ? "0" + d.toString() : d.toString();
          }
          return numberAppend(current);
        },
      },
    };
    return (
      <>
        <div className="main-slider-wrapper">
          {/* ===============  hero area start  =============== */}
          <div className="hero-area">
            <div className="hero-shape">
              <img src={ImageShape} alt="HeroIMG" />
            </div>
            <div className="container">
              <div className="swiper-container hero-slider overflow-hidden">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="slide-content">
                          <h4>
                            <i className="bi bi-calendar2-week" /> 27 maggio,
                            2023
                          </h4>
                          <h2>
                            UN SORRISO PER LA&nbsp;
                            <span>CULLA SAN MARCO</span>
                          </h2>
                          <ul className="featured-event">
                            <li>
                              <i className="bi bi-pin-map" /> Piazza del Sole, 6500 Bellinzona
                            </li>
                          </ul>
                          <div className="slider-btns">
                            <Link
                               onClick={this.scrollTop}
                              to={`${process.env.PUBLIC_URL}/risottata`}
                              className="primary-btn-fill">
                              Scopri di più
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6 text-center">
                        <div className="slide-figure  position-relative d-lg-flex justify-content-center">
                          
                        <ParallaxProvider>
                        <Parallax speed={-10}>

                          <img
                            src={HeroIMG1}
                            alt="HeroIMG"
                            className="img-fluid cover"
                          />
                            </Parallax>
                            <Parallax speed={-20}>
                              <img src={RazzoSVG} alt="Logo" className="razzo-copertina" />
                            </Parallax>
                            <Parallax speed={-10}>
                              <img src={TikOcchiolino} alt="Logo" className="tik-banner-home" />
                            </Parallax>
                          </ParallaxProvider>

                          <div className="animated-shape">
                            <img src={HeroIMG2} alt="HeroIMG" />
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>

          </div>
          {/* ===============  hero area end  =============== */}
        </div>
      </>
    );
  }
}

export default HeroArea;
