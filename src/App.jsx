import React, { Component } from "react";
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.min.css/";
import BoardContextProvider from "./BoardContext";
import ChMod from "./ChMod";

class App extends Component {
  render() {
    return (
      <div>
        <BoardContextProvider>
          <Board />
          <ChMod />
        </BoardContextProvider>
      </div>
    );
  }
}

export default App;
