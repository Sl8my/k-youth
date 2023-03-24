import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import EventDetailsWrapper from "./EventDetailsWrapper";
import RecentEvent from "./RecentEvent";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

class EventDetails extends Component {

  render() {
    const { data, loading, error } = useQuery(FILMS_QUERY);
    if (loading) {return "Loading...";}
    if (error) {return <pre>{error.message}</pre>}
    return (
      <>
        <ul>
          {data.launchesPast.map((launch) => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
        <BreadCrumb />
        <EventDetailsWrapper />
        <RecentEvent />
      </>
    );
  }
}

export default EventDetails;
