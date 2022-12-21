import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Fosils extends Component{
    state = {
        fosils : [],
        isLoaded : false,
    }

    componentDidMount(){
        fetch("https://sbc-sebatcabut.herokuapp.com/fosils")
        .then((response) => response.json())
        .then((json) =>{
            this.setState({
                fosils: json.fosils,
                isLoaded: true,
            })
            console.log(json)
        })
    }

    render(){
        const {fosils, isLoaded} = this.state;

        if(!isLoaded){
            return <p>Data is loading...</p>
        }else{
            return(
                <Fragment>
                    <h2>Fosils List</h2>
                    <ul>
                        {fosils.map((e) =>(
                            <li key={e.id}>
                                <Link to={`/fosils/${e.id}`}>{e.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
                
            );
        }
    }
}