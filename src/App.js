import React, { Component} from 'react';
import { Title } from './components/titleBar/title.component';
import { Info } from './components/info/info.component';
import { SuperAdmin } from './components/superAdmin/superAdmin.component';
import { Guard } from './components/guard/guard.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {

    };
  }
  render(){
    return (
      <div className="App">
        <Title/>
        <Info/>
        <SuperAdmin/>
        <Guard/>
      </div>
    );
  }
}
export default App;