import React, { Component } from "react";
import "./App.css";

//Reactstrap Bootstrap Components
import {
  Navbar,
} from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color='light' light expand='md'>
          <h1>New York Times Article Search</h1>
        </Navbar>
      </div>
    );
  }
}

export default App;
