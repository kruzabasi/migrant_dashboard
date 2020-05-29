import React, { Component } from "react";
import "./index.css";
import { BoardContext } from "./BoardContext";
import ChMod from "./ChMod";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      butterQuantity: 67,
      butterPrice: 455,
      sugarCrates: 44,
      sugarQuantity: 400,
      flourQuantity: 50,
      eggQuantity: 12,
      isLoggedIn: true
    };
  }

  buttonHandler2 = () => {
    this.setState({
      butterQuantity: this.state.butterQuantity - this.state.butterQuantity
    });
  };
  buttonHandler1 = () => {
    this.setState({
      butterQuantity: this.state.butterQuantity + 1
    });
  };
  removeCrates = () => {
    this.setState({
      sugarCrates: this.state.sugarCrates - this.state.sugarCrates
    });
  };
  addCrates = () => {
    this.setState({
      sugarCrates: this.state.sugarCrates + 1
    });
  };
  resetPrice = () => {
    this.setState({
      butterPrice: this.state.butterPrice - this.state.butterPrice
    });
  };
  increasePrice = () => {
    this.setState({
      butterPrice: this.state.butterPrice + 1
    });
  };
  deleteFlour = () => {
    this.setState({
      flourQuantity: this.state.flourQuantity - this.state.flourQuantity
    });
  };
  updateFlour = () => {
    this.setState({
      flourQuantity: this.state.flourQuantity + 1
    });
  };
  deleteSugar = () => {
    this.setState({
      sugarQuantity: this.state.sugarQuantity - this.state.sugarQuantity
    });
  };
  updateSugar = () => {
    this.setState({
      sugarQuantity: this.state.sugarQuantity + 1
    });
  };
  deleteEggs = () => {
    this.setState({
      eggQuantity: this.state.eggQuantity - this.state.eggQuantity
    });
  };
  updateEggs = () => {
    this.setState({
      eggQuantity: this.state.eggQuantity + 1
    });
  };
  static contextType = BoardContext;

  render() {
    const { brightTheme, lightMode, darkMode } = this.context;
    const mainTheme = brightTheme ? lightMode : darkMode;
    return (
      <div id="host" style={{ backgroundColor: mainTheme.containerBg }}>
        <ChMod />
        <div className="container">
          <div className="row">
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Quantity of Butter
                  </h5>
                  <img
                    src="http://clipart-library.com/image_gallery2/Butter-PNG.png"
                    alt="butter"
                  />
                  <p className="card-text text-center">
                    {this.state.butterQuantity}
                  </p>
                  <button
                    onClick={this.buttonHandler1}
                    className="butterButton1"
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                  >
                    Update Quantity
                  </button>
                  <button
                    onClick={this.buttonHandler2}
                    className="butterButton2"
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Price of Butter
                  </h5>
                  <img
                    src="http://clipart-library.com/image_gallery2/Butter-Free-PNG-Image.png"
                    alt="butter"
                  />
                  <p className="card-text text-center">
                    {this.state.butterPrice}
                  </p>
                  <button
                    onClick={this.increasePrice}
                    className="butterButton1"
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                  >
                    Update Quantity
                  </button>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.resetPrice}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Quantity of Crates
                  </h5>
                  <img
                    src="http://clipart-library.com/image_gallery/21986.png"
                    alt="crates"
                  />
                  <p className="card-text text-center">
                    {this.state.sugarCrates}
                  </p>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.addCrates}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.removeCrates}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Quantity of Sugar
                  </h5>
                  <img
                    src="http://clipart-library.com/image_gallery2/Sugar.png"
                    alt="sugar"
                  />
                  <p className="card-text text-center">
                    {this.state.sugarQuantity}
                  </p>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.updateSugar}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.deleteSugar}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">Gramms of Flour</h5>
                  <img
                    src="http://clipart-library.com/data_images/354530.png"
                    alt="flour"
                  />
                  <p className="card-text text-center">
                    {this.state.flourQuantity}
                  </p>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.updateFlour}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.deleteFlour}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-sm-4">
              <div
                className="card shadow mb-3 rounded"
                style={{
                  width: 300,
                  backgroundColor: mainTheme.backgroundMode,
                  color: mainTheme.fontColor
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center">
                    The Ammount of Eggs
                  </h5>
                  <img
                    src="http://clipart-library.com/images_k/egg-png-transparent/egg-png-transparent-17.png"
                    alt="eggs"
                  />
                  <p className="card-text text-center">
                    {this.state.eggQuantity}
                  </p>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.updateEggs}
                    className="butterButton1"
                  >
                    Update Quantity
                  </button>
                  <button
                    style={{
                      backgroundColor: mainTheme.buttonMode,
                      color: mainTheme.fontColor
                    }}
                    onClick={this.deleteEggs}
                    className="butterButton2"
                  >
                    Delete Value
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
