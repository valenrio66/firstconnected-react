import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
const axios = require('axios');

axios
  .get("https://test-gogin.herokuapp.com")
  .then(function (response) {
    console.log(response);
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