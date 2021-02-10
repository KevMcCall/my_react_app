import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/About.css";

// Creating an inheritance to React so we can use and access the
// the Render DOM as well a components, props, etc.

// Render() : Adding elements/components on our page.

// Whenever you code a page you need a render before the return. //
// This will return our page content on the DOM. //

//Implement State. Returning JS and Components. //

class about extends Component {
  render() {
    return (
      <>
        <h1>ABOUT ME!!</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          elementum orci quis orci hendrerit lacinia. Mauris suscipit viverra
          vestibulum. Praesent volutpat felis eget libero efficitur viverra at
          in justo. Nunc mauris diam, cursus non semper ultricies, tristique sit
          amet lorem. Nam eleifend bibendum velit. Nunc finibus quam sit amet
          orci feugiat bibendum. Nunc ultricies posuere ligula at fermentum.
          Aliquam a velit nisi. Etiam ut risus ornare, fringilla diam id,
          blandit leo. Vestibulum et semper quam. Donec pharetra felis at justo
          ultrices ultricies. Ut leo velit, volutpat quis ullamcorper ut,
          lacinia et magna. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Donec egestas molestie mi et
          tempor. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Nunc pharetra dictum lacus, et
          consequat ex sodales sit amet. Nunc vel nisl id erat congue viverra
          semper at justo.
        </p>
      </>
    );
  }
}

export default about;
