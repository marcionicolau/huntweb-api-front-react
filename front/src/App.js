import React, { Component } from "react";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import "./sytles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
