import React, { Component } from "react";

class WeatherSearchBox extends Component {
  render() {
    return (
      <div className="weatherSearchBox">
        <form>
          <label>What's the weather in...</label>
          <input
            type="text"
            placeholder="New York"
            value={this.props.userInput}
            onChange={(e) => this.props.updateSearchTerm(e.target.value)}
          ></input>
          <button
            type="submit"
            name="userInput"
            onClick={this.props.handleSearchClick}
            className="btn-primary btn-sm m-2"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default WeatherSearchBox;
