import React, { Component } from "react";
import EventDetailsLeftArea from "./EventDetailsLeftArea";
import EventRightArea from "./EventRightArea";


function EventDetailsWrapper() {
  return (
    <>
      <div className="event-details-wrapper ">
        <div className="container pt-120 position-relative">
          {/* <div className="background-title text-style-one">
            <h2>Risottata di beneficienzaaa</h2>
          </div> */}
          <div className="row">

              {/* event detils child componet */}
              <EventDetailsLeftArea/>
              <EventRightArea/>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetailsWrapper;
