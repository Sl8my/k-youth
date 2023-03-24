import React, { Component } from "react";
import EventDetailsLeftArea from "./EventDetailsLeftArea";
import EventRightArea from "./EventRightArea";

import { useQuery, gql } from "@apollo/client";

const NAME_QUERY = gql`
  {
    products(first: 2, channel: "default-channel") {
      edges {
        node {
          id
          name
          media {
            url
          }
        }
      }
    }
  }
`;

function EventDetailsWrapper() {
  const { data, loading, error } = useQuery(NAME_QUERY);
  if (loading) {return "Loading...";}
  if (error) {return <pre>{error.message}</pre>}
  return (
    <>
      <ul>
        {
          data.products.edges.map(
            ({ node: { id, name, media } }) => (
              <li key={id} >
                <a>
                  <div>
                    <p>{name}</p>
                    <img
                      src={media[0].url}
                      style={{ height: 500 }}
                      className="gallary-item-overlay"
                      alt="GallaryIMAGE"
                    />
                  </div>
                </a>
              </li>
            ),
          )
        }
      </ul>
      <div className="event-details-wrapper ">
        <div className="container pt-120 position-relative">
          <div className="background-title text-style-one">
            <h2>Event Details</h2>
          </div>
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
