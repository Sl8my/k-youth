import React, { Component } from "react";
import { Link } from "react-router-dom";
// page animation
import WOW from "wowjs";
import "../../../../assets/css/animate.css";
import BlogThumb from "../../../../assets/images/risottata/Locandina-risottata.jpg";
// import BlogThumb from "../../../../assets/images/event/ed-thumb.png";

import GallaryIem3 from "../../../../assets/images/gallary/e-gallary-l1.png";
import GallaryIem4 from "../../../../assets/images/gallary/e-gallary-l2.png";
import GallaryIem2 from "../../../../assets/images/gallary/e-gallary-sm1.png";
import GallaryIem1 from "../../../../assets/images/gallary/e-gallary1.png";
// Gallary View image import
import GallaryView1 from "../../../../assets/images/gallary/view1.png";
import GallaryView2 from "../../../../assets/images/gallary/view2.png";
// reply button icon
import ReplyBtnIcon from "../../../../assets/images/icons/reply-icon.png";
// commentor image import
import Commentor1 from "../../../../assets/images/speaker/commentor-1.png";
import Commentor2 from "../../../../assets/images/speaker/commentor-2.png";
import Commentor3 from "../../../../assets/images/speaker/commentor-3.png";
// main speaker image import
// import MainSeaker1 from "../../../../assets/images/speaker/event-sm1.png";
import MainSeaker1 from "../../../../assets/images/risottata/logo-osteria-nando-bellinzona-pizzeria-sementina.png";

// import MainSeaker2 from "../../../../assets/images/speaker/event-sm2.png";
import MainSeaker2 from "../../../../assets/images/risottata/lampara-ristorante-pizzeria-bellinzona-logo.png";

import MainSeaker3 from "../../../../assets/images/speaker/event-sm3.png";
import MainSeaker4 from "../../../../assets/images/speaker/event-sm4.png";
import MainSeaker5 from "../../../../assets/images/speaker/event-sm5.png";
import MainSeaker6 from "../../../../assets/images/speaker/event-sm6.png";
// speaker image import
import speaker1 from "../../../../assets/images/speaker/speaker-sm1.png";
import speaker2 from "../../../../assets/images/speaker/speaker-sm2.png";
import { SRLWrapper } from "simple-react-lightbox";
import speaker3 from "../../../../assets/images/speaker/speaker-sm3.png";
import speaker4 from "../../../../assets/images/speaker/speaker-sm4.png";
// main sponser logo image import
import sponsorLogo1 from "../../../../assets/images/risottata/SPONSOR-Kiwanis.svg";
import sponsorLogo2 from "../../../../assets/images/risottata/SPONSOR-Lions.svg";
import sponsorLogo3 from "../../../../assets/images/risottata/SPONSOR-Rotary.svg";
import sponsorLogo4 from "../../../../assets/images/sponsor/ed-sponsor4.png";

import OrganizerIMG1 from "../../../../assets/images/risottata/SPONSOR-Kiwanis.svg";
import OrganizerIMG2 from "../../../../assets/images/risottata/SPONSOR-Rotary.svg";
import OrganizerIMG3 from "../../../../assets/images/risottata/SPONSOR-Lions.svg";


class EventDetailsLeftArea extends Component {
  componentDidMount(){
    new WOW.WOW().init()
  }
  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <>


        <div className="col-xl-8">
          <div className="ed-main-wrap">
            <div className="ed-top">
              <div className="ed-thumb">
                <img src={BlogThumb} alt="Blog details" />
              </div>
            </div>

            <div className="ed-top">
              <div className="custom-container">
                <div className="event-info row align-items-center">
                  <div className="col-lg-3 col-md-4">
                  <div className="single-event-info">
                    <div className="info-icon">
                          <i className="bi bi-calendar-week" />
                        </div>
                        <div className="info-content">
                          <h5>Data inizio</h5>
                          <p>27 maggio 2023, ore 9:00</p>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="single-event-info">
                      <div className="info-icon">
                        <i className="bi bi-megaphone" />
                      </div>
                      <div className="info-content">
                        <h5>Data fine</h5>
                        <p>27 maggio 2023, ore 23:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="single-event-info">
                      <div className="info-icon">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="info-content">
                        <h5>Location</h5>
                        <p>Piazza del Sole<br></br>6500 Bellinzona</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="single-event-info">
                        <div className="info-icon">
                          <i className="bi bi-person" />
                        </div>
                        <div className="info-content">
                            <h5>Organizzatore</h5>
                            <p>Kiwanis Club Bellinzona e Valli</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ed-top">
              <div className="custom-container">
                <div className="event-info row">
                  <div className="row">
                    <div className="custom-container-due">
                      <div className="row justify-content-between">
                        <div className="event-organizer-wrap">
                          <div className="category-title">
                            <h4>SPONSOR DELL'EVENTO</h4>
                          </div>
                        </div>
                        <ul className="row justify-content-between">
                          <div className="event-organizer-wrap col-lg-3 col-md-3">
                            <div className="organizer-info">
                                <img src={OrganizerIMG1}  alt="Imgs" className="logo-promoter logo-promoter-stile"/>
                            </div>
                          </div>
                          <div className="event-organizer-wrap col-lg-3 col-md-3">
                            <div className="organizer-info">
                              <div className="organizer-image">
                                <img src={OrganizerIMG2}  alt="Imgs" className="logo-promoter logo-promoter-stile"/>
                                </div>
                            </div>
                          </div>
                          <div className="event-organizer-wrap col-lg-3 col-md-3">
                            <div className="organizer-info">
                              <div className="organizer-image">
                                <img src={OrganizerIMG3}  alt="Imgs" className="logo-promoter logo-promoter-stile"/>
                              </div>
                            </div>
                          </div>   
                        </ul>
 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

       



            <div className="ed-tabs-wrapper">
              <div className="tabs-pill">
                <ul
                  className="nav nav-pills justify-content-center"
                  id="pills-tab2"
                  role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-details-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-details"
                      type="button"
                      role="tab"
                      aria-controls="pills-details"
                      aria-selected="true">
                      {" "}
                      <i className="bi bi-info-circle" /> <span>Dettagli</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-schedule-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-schedule"
                      type="button"
                      role="tab"
                      aria-controls="pills-schedule"
                      aria-selected="false">
                      <i className="bi bi-calendar3" /> <span>Programma</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-gallary-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-gallary"
                      type="button"
                      role="tab"
                      aria-controls="pills-gallary"
                      aria-selected="false">
                      <i className="bi bi-images" /> <span>Galleria</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent2">
                <div
                  className="tab-pane fade show active"
                  id="pills-details"
                  role="tabpanel"
                  aria-labelledby="pills-details-tab">
                  <div className="details-tab-content">
                    <p>
                    Il tradizionale "Risotto in piazza" organizzato annualmente dal Kiwanis Club Bellinzona e Valli (KCBeV), quest'anno è finalizzato ad aiutare la ristrutturazione della Culla San Marco a Bellinzona, dove le suore accolgono donne e minori provenienti da situazioni familiari complesse, fornendo loro ospitalità e conforto. 
Lo scopo principale dell'evento è la raccolta di fondi che saranno devoluti all'Istituto La Culla San Marco di Bellinzona per permettere di avviare importanti ed urgenti lavori di manutenzione della sede. 
L'evento si terrà a Bellinzona nella suggestiva Piazza del Sole, sabato 27 maggio 2023. 

                    </p>
                    <div className="custom-container-tre">
                    <div className="speakers-list">
                      <h5 className="ed-subtitle">Ristoranti convenzionati</h5>
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker1} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Osteria Grotto del Nando</h6>
                              <strong>Ristorante/Grotto</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-google" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker2} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>La Lampara</h6>
                              <strong>Ristorante pizzeria</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-google" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker3} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Victoria Lily</h6>
                              <strong>Marketing</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker4} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Hannah Emilia</h6>
                              <strong>Marketing</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker5} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Sebastian Mateo</h6>
                              <strong>Founder</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="single-speaker">
                            <div className="speaker-image">
                              <img src={MainSeaker6} alt="Blog details" />
                            </div>
                            <div className="speaker-info">
                              <h6>Willow Lucy</h6>
                              <strong>Co Founder</strong>
                              <ul className="speaker-social-links">
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-facebook-f" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-instagram" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-linkedin-in" />
                                  </Link>
                                </li>
                                <li>
                                  <Link onClick={this.scrollTop} to={"#"}>
                                    <i className="fab fa-twitter" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-schedule"
                  role="tabpanel"
                  aria-labelledby="pills-schedule-tab">
                  <div className="comment-section">
                      {/* <div className="comment-section-header">
                        <div className=" comment-arrow prev-comment ">
                          <Link onClick={this.scrollTop} to={"#"}>
                            <i className="bi bi-chevron-left" /> Previous
                          </Link>
                        </div>
                        <div className="comment-counter">
                          <h5>
                            Comment <span>(20)</span>{" "}
                          </h5>
                        </div>
                        <div className=" comment-arrow next-comment ">
                          <Link onClick={this.scrollTop} to={"#"}>
                            Next <i className="bi bi-chevron-right" />
                          </Link>
                        </div>
                      </div> */}
                      <ul className="comments-list">
                        <li className="single-comment">
                          <div className="commentor-img">
                            <img src={Commentor3} alt="Blog details" />
                          </div>
                          <div className="comment-info">
                          <div className="commentor-info">
                              <div className="commentor-bio">
                                <h6 className="commentor-name">
                                  🎉 Intrattenimento
                                </h6>
                                <div className="comment-timing">
                                  <span className="comment-date">
                                    27 maggio 2023
                                  </span>{" "}
                                  <span className="comment-time">Dalle 09:30 alle 15:30</span>
                                </div>
                              </div>
                            </div>
                            <p>
                              Attività di intrattenimento per ragazzi e famiglie e dalle 15:00 la corsa "Bambino aiuta bambino".
                            </p>

                          </div>
                        </li>
                        <li className="single-comment">
                          <div className="comment-info">
                          <div className="commentor-info">
                              <div className="commentor-bio">
                                <h6 className="commentor-name">
                                  🍽️ Cucina
                                </h6>
                                <div className="comment-timing">
                                  <span className="comment-date">
                                    27 maggio 2023
                                  </span>{" "}
                                  <span className="comment-time">Dalle 12:00 alle 14:00</span>
                                </div>
                              </div>
                            </div>
                            <p>
                            Apertura della cucina. Si da il via al "Risotto in piazza" con lo Chef Graziano e lo staff Kiwaniano.
                            </p>

                          </div>
                        </li>
                      </ul>
                  </div>
                  {/* <div className="schedule-tab-content">
                    <div className="schedule-wrapper">
                      <div className="event-date">
                        <h3>30 Sep 2021</h3>
                      </div>
                      <div className="single-schedule-card row">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>10.00 AM - 11.30 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker1} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>John Loganin</h4>
                                <p>Marketing</p>
                                <ul className="speaker-social-links">
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-linkedin-in" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInRight animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>11.30 AM - 12.30 PM</h4>
                              <h5>
                                Room No - <span>02</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker2} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Joseph John</h4>
                                <p>Management</p>
                                <ul className="speaker-social-links">
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-linkedin-in" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInLeft animated"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>01.00 AM - 01.30 PM</h4>
                              <h5>
                                Room No - <span>05</span>
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right has-break">
                            <h3 className="break-type">Lunch Time</h3>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row fadeInRight animated"
                        data-wow-delay="500ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>02.00 PM - 03.00 PM</h4>
                              <h5>
                                Room No - <span>07</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker3} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Gianna Abiga</h4>
                                <p>Developing</p>
                                <ul className="speaker-social-links">
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-linkedin-in" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="single-schedule-card row wow fadeInLeft animated"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-5 p-0">
                          <div className="single-schedule-left">
                            <div className="schedule-top">
                              <h4>03.00 PM - 04.00 PM</h4>
                              <h5>
                                Room No - <span>01</span>
                              </h5>
                            </div>
                            <div className="schedule-bottom">
                              <div className="speaker-image">
                                <img src={speaker4} alt="Blog details" />
                              </div>
                              <div className="speaker-info">
                                <h4>Michael Etha</h4>
                                <p>Marketing</p>
                                <ul className="speaker-social-links">
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-facebook-f" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-instagram" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-linkedin-in" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link onClick={this.scrollTop} to={"#"}>
                                      <i className="fab fa-twitter" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 p-0">
                          <div className="single-schedule-right">
                            <h3 className="schedule-title">
                              Nulla nisl tellus hendrerit nec dignissim
                              pellentesqu.
                            </h3>
                            <p className="schedule-discription">
                              Cras semper, massa vel aliquam luctus, eros odio
                              tempor turpis, ac placerat metus tortor eget
                              magna.
                            </p>
                            <div className="schedule-topics">
                              <h5>Topic</h5>
                              <div className="row">
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Color
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Typhography
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Allingment
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Development
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <ul>
                                    <li>
                                      <i className="bi bi-check" /> Graphic
                                      Design
                                    </li>
                                    <li>
                                      <i className="bi bi-check" /> Web Design
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-progress-wrap">
                        <div className="ticket-progressbar" />
                        <h4>
                          Available Seat: <span>390-500</span>
                        </h4>
                        <div className="ticket-book-btn">
                          <Link
                            onClick={this.scrollTop}
                            to={"#"}
                            className="primary-btn-fill">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-gallary"
                  role="tabpanel"
                  aria-labelledby="pills-gallary-tab">
                  <div className="gallary-tab-content">
                  <SRLWrapper>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem1} alt="Gallery" />
                          <Link to={GallaryIem1}>
                            <img
                              src={GallaryIem1}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem3} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem4} alt="Gallery" />
                          <Link to={GallaryIem4}>
                            <img
                              src={GallaryIem4}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem1} alt="Gallery" />
                          <Link to={GallaryIem1}>
                            <img
                              src={GallaryIem1}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                        <div className="gallary-item">
                          <img src={GallaryIem2} alt="Gallery" />
                          <Link to={GallaryIem2}>
                            <img
                              src={GallaryIem2}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem3} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="gallary-item">
                          <img src={GallaryIem4} alt="Gallery" />
                          <Link to={GallaryIem3}>
                            <img
                              src={GallaryIem3}
                              className="gallary-item-overlay"
                              alt="GallaryIMAGE"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  
                    </SRLWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventDetailsLeftArea;
