import React from "react";
import { Jumbotron, Container } from "reactstrap";





const jumboStyle = {
    textAlign: 'center', 
    
  };
  
function jumbotron() {
  return (
    // JSX. Can Only Display One Element At A Time // Multiple Elements
    // In An Empty Div // Semantic HTML Is Beneficial When It Comes To Writing Components //
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3" style={jumboStyle}>Kevin McCall</h1>
          <p className="lead" style={jumboStyle}>
            Welcome!
          </p>
        </Container>
      </Jumbotron>

      {/* End Jumbotron  */}

    </>
  );
}

export default jumbotron;
