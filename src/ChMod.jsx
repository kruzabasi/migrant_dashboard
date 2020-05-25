import React, { Component } from "react";
import { BoardContext } from "./BoardContext";

class ChMod extends Component {
  static contextType = BoardContext;

  render() {
    const { chMod } = this.context;
    return <button onClick={chMod}>Theme Mode</button>;
  }
}

export default ChMod;
