import React, { Component } from "react";

export const BoardContext = React.createContext();

class BoardContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      brightTheme: true,
      lightMode: {
        fontColor: "#5c5c5c",
        backgroundMode: "#dbdbdb",
        buttonMode: "#a3a3a3"
      },
      darkMode: {
        fontColor: "#eee7d3",
        backgroundMode: "#070413",
        buttonMode: "#020102"
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
