import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from "./layout/Header";
import Home from './components/Home';

import './css/bootstrap.min.css';
import './css/styles.scss';

class App extends Component {

    render() {
        return (
          <div className = "App">
            <BrowserRouter>
              <Header />
              <React.Fragment>
                  <Route exact path = "/" component={Home} />
              </React.Fragment>
            </BrowserRouter>
          </div>
        )
    }

}

export default App;
