import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import EventDetailsWrapper from "./EventDetailsWrapper";
import RecentEvent from "./RecentEvent";


function EventDetails(props) {

    return (
      <>
        <BreadCrumb />
        <EventDetailsWrapper />
        <RecentEvent />
      </>
    );
}

export default EventDetails;
