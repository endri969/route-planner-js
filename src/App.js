import React, { Component } from 'react';
import './App.css';
import Place from './components/places/Place';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const Mui = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Mui}>
        <div className="App">
          <Place/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
