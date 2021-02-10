import React from "react";
import "../Styles/Header.css"


function header() {
  return (
    // JSX. Can Only Display One Element At A Time // Multiple Elements
    // In An Empty Div // Semantic HTML Is Beneficial When It Comes To Writing Components //
    <header className="header">
      <h1>Welcome!</h1>
      <h2 className="name">Kevin McCall</h2>
    </header>
  );
}

export default header;
// Allows Us To Call Our Components //


// Prop Styling
// Inline Styling
// 3rd Party Styling
// Styled Components