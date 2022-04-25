import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Map from './Map';
function Example() {
    return (
        <Router>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Laravel React Router Setup</div>

                        <div className="card-body">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <Routes>
          <Route element={<Map/>} path="/map" />
          <Route element={<Home/>} path="/" />
        </Routes>
        </Router>        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
