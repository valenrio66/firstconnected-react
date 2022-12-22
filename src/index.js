import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import axios from 'axios';

const endpoints = [
  "https://test-gogin.herokuapp.com/invertebratas",
  "https://test-gogin.herokuapp.com/fosils",
  "https://test-gogin.herokuapp.com/vertebratas",
  "https://test-gogin.herokuapp.com/villages",
];
axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((allResponses) => {
    allResponses.forEach((response) => {
    console.log(response.data);
  });
});

// axios({
//   method: "get",
//   url: "http://test-gogin.herokuap.com",
// }).then(function (response) {
//   console.log(response.data);
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );