import React, {Component, Fragment} from 'react';



export default class Invertebrata extends Component{
    state = {
        invertebrata : [],
        isLoaded : false,
    }

    componentDidMount(){
        fetch("https://test-gogin.herokuapp.com/invertebrata/" + this.props.match.params.id)
        .then((response) => response.json())
        .then((json) =>{
            this.setState({
                invertebrata: json.invertebrata,
                isLoaded: true,
            })
            console.log(json)
        })
    }

    render(){
        const {invertebrata, isLoaded} = this.state;

        if (invertebrata.nama){
            invertebrata.nama= Object.values(invertebrata.nama);
        }else{
            invertebrata.nama=[];
        }

        if(!isLoaded){
            return <p>Data is loading...</p>
        }else{        
            return(
                <Fragment>
                    <h2>Invertebrata: {invertebrata.title} </h2>
                    <div className="float-start">
                        {invertebrata.nama.map((m, idx) =>(
                            <span className="badge bg-secondary me-1" key={idx}>{m}</span>
                        ))}
                    </div>
                    <div className="clearfix"></div>
                    <hr/>
                    <table className="table table-compact table-striped">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td><strong>Lokasi Ditemukan</strong></td>
                                <td>{invertebrata.lokasi_ditemukan}</td>
                            </tr>                        
                            <tr>
                                <td><strong>Waktu Ditemukan</strong></td>
                                <td>{invertebrata.waktu_ditemukan}</td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            );
        }
    }
}
