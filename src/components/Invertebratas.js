import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



axios
  .get("http://test-gogin.herokuapp.com/invertebratas")
  .then(function (response) {
    console.log(response);
  });

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     console.log(response);
//   });

export default class Invertebratas extends Component{

    
    state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://test-gogin.herokuapp.com/invertebratas`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}