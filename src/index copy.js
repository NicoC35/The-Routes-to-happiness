import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom' 
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

class Home extends Component{
  render(){
    return(    
      <BrowserRouter>
              <div>
                <nav>
                    <ul>
                        <li><NavLink exact path="/">Home </NavLink></li>
                        <li><NavLink exact path="/Happy">Happy</NavLink></li>
                        <li><NavLink exact path="/Sleepy">Sleepy</NavLink></li>
                        <li><NavLink exact path="/Guilty">Guilty </NavLink></li>
                    </ul>
                </nav>
              <Switch>
                <Route exact path="/Happy" component={Happy} />
                <Route exact path="/Sleepy" component={Sleepy} />
                <Route exact path="/Guilty" component={Guilty} />
              </Switch>
          </div>
       </BrowserRouter>
      ) 
  }
}
ReactDOM.render( <Home />, document.getElementById('root') );
