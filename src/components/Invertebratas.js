import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Invertebratas extends Component{
    state = {
        invertebratas : [],
        isLoaded : false,
    }

    componentDidMount(){
        fetch("https://sbc-sebatcabut.herokuapp.com/invertebratas")
        .then((response) => response.json())
        .then((json) =>{
            this.setState({
                invertebratas: json.invertebratas,
                isLoaded: true,
            })
            console.log(json)
        })
    }

    render(){
        const {invertebratas, isLoaded} = this.state;

        if(!isLoaded){
            return <p>Data is loading...</p>
        }else{
            return(
                <Fragment>
                    <h2>Invertebratas List</h2>
                    <ul>
                        {invertebratas.map((e) =>(
                            <li key={e.id}>
                                <Link to={`/invertebratas/${e.id}`}>{e.title}</Link>
                            </li>
                        ))}
                    </ul>
                </Fragment>
                
            );
        }
    }
}