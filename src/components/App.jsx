import React, { Component } from "react";
import LayoutFooter from "./common/LayoutFooter";
import HomeOneHeader from "./common/HomeOneHeader";

class Layout extends Component {
  render() {
    return (
      <>
      {/* all inner page componnets and innner heade footer */}
        <HomeOneHeader />
        {this.props.children}
        <LayoutFooter />
      </>
    );
  }
}

export default Layout;
