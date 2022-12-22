import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// const axios = require('axios');
// axios
//   .get("https://finalspaceapi.com/api/v0/character/?limit=2")
//   .then(function (response) {
//     console.log(response);
//   });

export default class Invertebratas extends Component{
    state = {
        invertebratas : [],
        isLoaded : false,
    }

    componentDidMount() {
    axios.get(
        `https://test-gogin.herokuapp.com/`
    )
        .then((response) => response.JSON())
        .then((JSON) => {
            this.setState({
                invertebratas: JSON.invertebratas,
                isLoaded: true,
            })
            console.log(JSON)
        })
}

    // componentDidMount(){
    //     fetch("http://test-gogin.herokuapp.com/invertebratas")
    //     .then((response) => response.json())
    //     .then((json) =>{
    //         this.setState({
    //             invertebratas: json.invertebratas,
    //             isLoaded: true,
    //         })
    //         console.log(json)
    //     })
    // }

    render(){
        const {invertebratas, isLoaded} = this.state;

        if(!isLoaded){
            return <p>Data is loading...</p>
        }else{
            return(
                <Fragment>
                    <h2>Invertebrata List</h2>
                    <ul>
                        {invertebratas.map((e) =>(
                            <li key={e.id}>
                                <Link to={`/invertebratas/${e.id}`}>{e.nama}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
                
            );
        }
    }
}