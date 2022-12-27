import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// const axios = require('axios');
// axios
//   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
//   .then(function (response) {
//     console.log(response);
//   });

axios.get('https://test-gogin.herokuapp.com/invertebratas')
    .then(Response => {
    // Handle success
        console.log(Response.data);
})
    .catch(error => {
    // Handle error
        console.log(error);
})