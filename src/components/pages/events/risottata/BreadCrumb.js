import React, { Component } from "react";
import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';


import RazzoSVG from "../../../../assets/images/risottata/Razzo-rosso.svg";

import TikIdea from "../../../../assets/images/risottata/Tik-idea.svg";

class BreadCrumb extends Component {
  
  render() {

    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        

        <div className="breadcrumb-area">

          <div className="container">


        {/* <ParallaxBannerLayer>
          <ParallaxBanner></>
        </ParallaxBannerLayer> */}
          <ParallaxProvider>
            <Parallax speed={-15}>
              <img src={RazzoSVG} alt="Logo" className="razzo"/>
            </Parallax>
            <Parallax speed={-10}>
              <img src={TikIdea} alt="Tik" className="tik-banner" />
            </Parallax>
            
          </ParallaxProvider>
          


            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="page-title">UN SORRISO PER LA CULLA SAN MARCO</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}



      </>
    );
  }
}

export default BreadCrumb;
