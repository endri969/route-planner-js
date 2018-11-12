import React, { Component } from 'react';
import './App.css';
import Place from './components/places/Place';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Place/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
