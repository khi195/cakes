import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import Card from '../src/components/cards/card'
import Cakeform from '../src/components/cakeform'
import {get} from './api';
import * as actions from '../src/actions';
import {connect} from 'react-redux';

class App extends Component {

state = {showcard: true, showform: false}

  add_cake(){
    this.setState({showcard: false, showform: true})
  }
  
  
  render() {
    return (
      <div>
      <button onClick={()=>this.props.getall()}> View All </button>
      <button onClick={()=>this.add_cake()}> Add cake </button>
     <Card /> 
     {this.state.showform && <Cakeform onSubmit ={this.props.addcake()}/>}
      </div>
    );
  }
}

export default connect(null, actions)(App)
// export default App;
