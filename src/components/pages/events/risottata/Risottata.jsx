import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import EventDetailsWrapper from "./EventDetailsWrapper";
import RecentEvent from "./RecentEvent";
import Parallax from "./Parallax";

import Tik from "../../../../assets/images/risottata/Tik-idea.svg";

import { Link } from "react-router-dom";



function Risottata(props) {

    return (
      <>

          <div className="hero-area">
            <div className="hero-shape">
              <img src={Tik} alt="HeroIMG" className="svg-shape" />
            </div>
          </div>
        <BreadCrumb />
        <EventDetailsWrapper />
        {/* <RecentEvent /> */}
      </>
    );
}

export default Risottata;
