import React, { Component } from "react";
import { Link } from "react-router-dom";
import EventBanner from "../../../../assets/images/banners/sb-banner.png";
import OrgabizerIMG from "../../../../assets/images/risottata/images.png";
// import OrgabizerIMG from "../../../../assets/images/event/event-orgainizer.png";

// recent event images import
import OrganizerIMG1 from "../../../../assets/images/risottata/SPONSOR-Kiwanis.svg";
import OrganizerIMG2 from "../../../../assets/images/risottata/SPONSOR-Rotary.svg";
import OrganizerIMG3 from "../../../../assets/images/risottata/SPONSOR-Lions.svg";
import OrganizerIMG4 from "../../../../assets/images/risottata/SPONSOR-Ambassador.svg";
import OrganizerIMG5 from "../../../../assets/images/risottata/SPONSOR-Soroptimist.svg";
import SignatureImg from "../../../../assets/images/event/signature.png";
class EventRightArea extends Component {
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>
        <div className="col-xl-4">
          <div className="event-d-sidebar">
            <div className="event-organizer-wrap">
              <div className="category-title">
                 <h4>EVENTO PROMOSSO DA</h4>
              </div>
            </div>
            <div className="event-organizer-wrap">
              <div className="organizer-info">
                  <img src={OrganizerIMG1}  alt="Imgs" className="logo-promoter"/>
              </div>
            </div>
            <div className="event-organizer-wrap">
              <div className="organizer-info">
                  <img src={OrganizerIMG2}  alt="Imgs" className="logo-promoter"/>
              </div>
            </div>
            <div className="event-organizer-wrap">
              <div className="organizer-info">
                  <img src={OrganizerIMG3}  alt="Imgs" className="logo-promoter"/>
              </div>
            </div>
            <div className="event-organizer-wrap">
              <div className="organizer-info">
                  <img src={OrganizerIMG4}  alt="Imgs" className="logo-promoter"/>
              </div>
            </div>
            <div className="event-organizer-wrap">
              <div className="organizer-info">
                  <img src={OrganizerIMG5}  alt="Imgs" className="logo-promoter"/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventRightArea;
