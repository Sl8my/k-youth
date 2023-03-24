import React, { Component } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import RazzoSVG from "../../../../assets/images/risottata/Razzo-rosso.svg";

import Tik from "../../../../assets/images/risottata/Tik-idea.svg";

class Parallax extends Component {
  
  render() {

    return (
      <>
        {/* <ParallaxBanner
          layers={[
            { image: '../../../../assets/images/banner/breadcrumb-bg.png', speed: -20 },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
              ),
            },
            { image: '../../../../assets/images/risottata/Razzo-rosso.svg', speed: -10 },
          ]}
          className="aspect-[2/1]"
        /> */}

      </>
    )
  }
}
  

export default Parallax;