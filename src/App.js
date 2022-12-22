import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';
import Home from './components/Home';
import Invertebratas from './components/Invertebratas';
import Admin from './components/Admin';

export default function App() {
  return (
    <Router>
  <div className="container">
    <div className="row">
        <h1 className="mt-3">Museum Collection</h1>
        <hr className="mb-3"/>
    </div>
    <div className="row">
        <div className="col-md-2">
            <nav>
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/">Home</Link></li>
                    <li className="list-group-item"><Link to="/invertebratas">Invertebrata</Link></li>
                    <li className="list-group-item"><Link to="/admin">Admin</Link></li>
                </ul>
            </nav>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/invertebratas/:id" component={Invertebrata} />
            <Route path="/invertebratas"><Invertebratas /></Route>
            <Route path="/admin"><Admin /></Route>
            <Route path="/"><Home /></Route>
          </Switch>          
        </div>
    </div>
  </div>    
  </Router>
  );
}

function Invertebrata(props){
  let {id} = useParams();
  return(
    <h1>Invertebrata {id}</h1>
  );
}