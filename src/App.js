import "./App.css";
import React, { Component } from "react";
import WeatherSearchBox from "./components/WeatherSearchBox/WeatherSearchBox";
import WeatherResults from "./components/WeatherResults/WeatherResults";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      cityData: [],
    };
  }

  updateSearchTerm = (userInput) => {
    
    this.setState({
      searchTerm: userInput,
    });
  };

  handleSearchClick = (event) => {
    console.log("Searching for " + this.state.searchTerm);
    event.preventDefault();

    const apiKey = "215db701e7e940feafb44408212704";
    const searchUrl = "http://api.weatherapi.com/v1/current.json?";
    const params = {
      q: this.state.searchTerm,
      key: apiKey,
    };

    function formatQueryParams(params) {
      const queryItem = Object.keys(params).map(
        (idx) => idx + "=" + params[idx]
      );
      return queryItem.join("&");
    }

    const queryString = formatQueryParams(params);
    const url = searchUrl + queryString;
    console.log(url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cityData: data,
        });
      });
  };

  render() {
    return (
      <main className="container App">
        <WeatherSearchBox
          handleSearchClick={this.handleSearchClick}
          updateSearchTerm={this.updateSearchTerm}
        />
      <div className="weatherSearchResults">
        <WeatherResults {...this.state.cityData} />
      </div>
    </main>
    );
  }
}

export default App;
