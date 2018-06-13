import React, { Component } from 'react';
import './style/App.css';
import axios from "axios";

import Search from "./Search";
import Info from "./Info";

var KEY = "56b0d5a85804824c81150e1595caf58b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      json: {}
    }
  }

  componentWillMount() {
    this.getDataFromApiWillMount();
  }

  getDataFromApiWillMount = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${KEY}`)
      .then((response) => {
        // console.log(response);
        this.setState({ json: response }, () => {
          // console.log("willount :",this.state.data)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDataFromApi = () => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${KEY}`)
      .then((response) => {
        // console.log(response);
        this.setState({ json: response, error: "" })
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Aucun résultat !" })
      });
  }

  getInput = (event) => {
    this.setState({ input: event.target.value })
  }

  btnSearch = (event) => {
    event.preventDefault();
    this.getDataFromApi();
    this.setState({ input: "" })
  }


  render() {
    const renderInfo = () => {
      if (this.state.json.data) {
        return <Info info={this.state.json.data} />
      }
    }
    return (
      <div className="container contain">
        <Search btnSearch={this.btnSearch} value={this.state.input} getInput={this.getInput} />
        <p className="error">{this.state.error}</p>
        {renderInfo()}
      </div>
    );
  }
}

export default App;
