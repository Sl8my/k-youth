import React, { Component } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../assets/css/animate.css";
import AboutVideo from "../../../assets/images/about/a-mini-video.png";
// mini gallary
import MiniGallary1 from "../../../assets/images/about/a-mini1.png";
import MiniGallary2 from "../../../assets/images/about/a-mini2.png";
// icon image
import Icon2 from "../../../assets/images/icons/event-sm.png";
import QuoteIcon from "../../../assets/images/icons/qoute-icon.png";
import Icon3 from "../../../assets/images/icons/sed-sm.png";
import Icon1 from "../../../assets/images/icons/speaker-sm.png";
// feature icon image import
import FeatureIcon3 from "../../../assets/images/icons/gaust-md.png";
import FeatureIcon2 from "../../../assets/images/icons/sound-md.png";
import FeatureIcon1 from "../../../assets/images/icons/speaker-md.png";
import VideoShapeIcon from "../../../assets/images/shapes/play-btn.png";



class AboutWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isOpen: false,
    };
}
 
  componentDidMount() {
    // animation script
    new WOW.WOW().init();
  }
  render() {
    // modal video change state
    const { isOpen } = this.state;
    return (
      <>
        {/* =============== About wrapper start =============== */}
        <div className="about-wrapper mt-96">
          <div className="container">
            <div className="about-company">
              <div className="row">
                <div className="col-lg-6">
                  <div className="company-info">
                    <h5>About EventLab</h5>
                    <h2>
                      Sed malesuada massa lacinia, dictum dui a, dignissim sem.
                    </h2>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.
                    </p>
                    <div className="row">
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon1}  alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={100}
                                duration={4.75}></CountUp>
                              +
                            </h3>
                            <h6>Speaker</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon2}  alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={400}
                                duration={3.75}></CountUp>
                              +
                            </h3>
                            <h6>Event</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-6">
                        <div className="about-infobox">
                          <div className="info-icon">
                            <img src={Icon3}  alt="Imgs" />
                          </div>
                          <div className="info-content">
                            <h3>
                              <CountUp
                                start={0}
                                end={100}
                                duration={4.75}></CountUp>
                              +
                            </h3>
                            <h6>Schedule</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about-more-btn">
                      <Link
                        onClick={this.scrollTop}
                        to={"#"}
                        className="primary-btn-fill">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="company-mini-gallary">
                    <div className="Gallary-item1 Gallary-item">
                      <img src={MiniGallary1}  alt="Imgs" className="img-fluid" />
                    </div>
                    <div className="Gallary-item2 Gallary-item">
                      <img src={MiniGallary2}  alt="Imgs" className="img-fluid" />
                    </div>
                    <div className="Gallary-item3 Gallary-item Gallary-video">
                      <img
                        src={AboutVideo}
                        alt="abput vedio"
                        className="img-fluid"
                      />
                      <div className="video-icon">
                      <i onClick={() => this.setState({ isOpen: true })} class="
                      video-popup"><img src={VideoShapeIcon}  alt="Imgs"/></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="company-feature mt-96">
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon1}  alt="Imgs" />
                        </div>
                        <h5>we all time Provide Intelligent Speaker</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon2}  alt="Imgs" />
                        </div>
                        <h5>A good answer will Best knowledge</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon3}  alt="Imgs" />
                        </div>
                        <h5>we are always dedicated our Guest</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="company-feature-box">
                        <div className="feature-icon">
                          <img src={FeatureIcon1}  alt="Imgs" />
                        </div>
                        <h5>we are provide friendly environment</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-info">
                    <h5>Why Choose us</h5>
                    <h2>
                      Sed malesuada massa lacinia, dictum dui a, dignissim sem.
                    </h2>
                    <p>
                      Cras semper, massa vel aliquam luctus, eros odio tempor
                      turpis, ac placerat metus tortor eget magna. Donec mattis
                      posuere pharetra. Donec vestibulum ornare velit ut
                      sollicitudin. Pellentesque in faucibus purus.
                    </p>
                    <div className="feature-list row ">
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Free Certificate</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Conference Lunch</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>Conference Snaks</span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>24/7 Support </span>
                        </div>
                      </div>
                      <div className="col-xl-4 col-sm-6">
                        <div className="single-feature">
                          <i className="bi bi-check" />{" "}
                          <span>All Type Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-history position-relative mt-120">
              <h3 className="float-title position-absolute">EventLab Story</h3>
              <div className="qoute-icon position-absolute">
                <img src={QuoteIcon}  alt="Imgs" />
              </div>
              <p>
                Cras semper, massa vel aliquam luctus, eros odio tempor turpis,
                ac placerat metus tortor eget magna. Donec mattis posuere
                pharetra. Donec vestibulum ornare velit ut sollicitudin.
                Pellentesque in faucibus purus.Nulla nisl tellus, hendrerit nec
                dignissim pellentesque, posuere in est. Suspendisse bibendum
                vestibulum elit eu placerat. In ut ipsum in odio euismod
                tincidunt non lacinia nunc. Donec ligula augue, mattis eu varius
                ac, tempus vel ex. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nam
                viverra porttitor urna, quis ultricies turpis euismod et. Ut
                sapien quam, iaculis eu purus at, egestas pharetra nisi. Cras
                tristique.
              </p>
              <p>
                mauris convallis molestie lacinia, orci massa lobortis felis, at
                auctor ipsum leo sit amet diam. Donec vel euismod erat, at
                gravida metus. Quisque nunc quam, pretium ornare tristique sed,
                porttitor id dolor.Nulla nisl tellus, hendrerit nec dignissim
                pellentesque, posuere in est. Suspendisse bibendum vestibulum
                elit eu placerat. In ut ipsum in odio euismod tincidunt non
                lacinia nunc. Donec ligula augue, mattis eu varius ac, tempus
                vel ex. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Nam viverra porttitor
                urna, quis ultricies turpis euismod et. Ut sapien quam Nulla
                nisl tellus, hendrerit nec dignissim.
              </p>
            </div>
          </div>
        </div>
        {/* =============== About wrapper end =============== */}
        <React.Fragment>
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-tJYN-eG1zk" onClose={() => this.setState({ isOpen: false })} />
           </React.Fragment>
      </>
    );
  }
}

export default AboutWrapper;
