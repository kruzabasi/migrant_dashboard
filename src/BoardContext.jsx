import React, { Component } from "react";

export const BoardContext = React.createContext();

class BoardContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      brightTheme: true,
      lightMode: {
        fontColor: "#1a1e25",
        backgroundMode: "#ea9050",
        buttonMode: "#2f4b7ee8",
        cardBody: "#070413",
        containerBg: "#dbdbdb"
      },
      darkMode: {
        fontColor: "#eee7d3",
        backgroundMode: "#25364b",
        buttonMode: "#1a1e2591",
        cardBody: "#dbdbdb",
        containerBg: "#1a1e25"
      }
    };
  }
  chMod = () => {
    this.setState({
      brightTheme: !this.state.brightTheme
    });
  };
  render() {
    return (
      <div>
        <BoardContext.Provider value={{ ...this.state, chMod: this.chMod }}>
          {this.props.children}
        </BoardContext.Provider>
      </div>
    );
  }
}

export default BoardContextProvider;
