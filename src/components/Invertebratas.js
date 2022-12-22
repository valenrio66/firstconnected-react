import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Invertebratas extends Component{
    state = {
        invertebratas : [],
        isLoaded : false,
    }

    componentDidMount() {
    axios.get(
        `https://test-gogin.herokuapp.com/`
    )
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
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
                    <h2>Anime List</h2>
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