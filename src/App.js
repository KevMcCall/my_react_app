import React from "react";
// import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./Pages/home";
import contact from "./Pages/contact";
import about from "./Pages/about";
import Jumbotron from "./Components/Jumbotron";
// import grocerylist from "./Components/List";

//Components
const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true,
  },

  {
    id: 2,
    name: "Eggs",
    purchased: true,
  },

  {
    id: 3,
    name: "Butter",
    purchased: true,
  },

  {
    id: 4,
    name: "Cheese",
    purchased: true,
  },

  {
    id: 5,
    name: "Steak",
    purchased: true,
  },

  {
    id: 6,
    name: "Bread",
    purchased: true,
  },
];




// Any component put here will appear on every page //
function app() {
  return (
    <>
      <Jumbotron />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/about" component={about} />
        </Switch>
      </Router>
    </>
  );
}

export default app;

// function App() {
//   return
//   <>

//   </>;
// }

// export default App;
// <Header />
// <Section />
// <Contact />
