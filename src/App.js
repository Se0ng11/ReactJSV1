import React from 'react';
import './App.css';
import { Main } from './component/menu/MenuList';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  componentDidMount(){
    document.title = "my-app";
  }

  render() {
    return (
      <div>
        <Router>
          <Main />
        </Router>
      </div>
    );
  }
}

export default App;
