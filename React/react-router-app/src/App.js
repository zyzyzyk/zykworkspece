import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './page/Layout'
import 'antd/dist/antd.css'
// hashRouter #
// historyRouter 不带#
// BrowserRouter 实现方式是通过 h5 的 History api
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  );
}

export default App;
