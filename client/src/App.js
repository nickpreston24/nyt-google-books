import React, { Component } from 'react';
import './App.css';
import Search from './pages/BookSearch';
import Saved from './pages/SavedBooks';
import NoMatch from './pages/NoMatch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SpinLoad from './pages/shared/SpinLoad'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <h1>Google Books Search</h1>
                <h2>Save books for later!</h2>
                <Switch>
                    <Route
                        component={Search} RenderLoading={SpinLoad}
                        exact path="/" initialQuery="" />
                    <Route exact path="/Saved" component={Saved}/>                    
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
