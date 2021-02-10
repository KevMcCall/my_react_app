import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";


// Creating an inheritance to React so we can use and access the
// the Render DOM as well a components, props, etc.

// Render() : Adding elements/components on our page.
const homeStyle = {
  color: 'white' // 
  
};

class home extends Component {
  render() {
    return(
       <>
       
      <h1 style={homeStyle}>Welcome To The Home Page!</h1>
      

       </>
    )
  } 

}

export default home;