import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Competences from './components/Competences';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Portifolio from './components/Portifolio';
import NavFloot from './components/NavFloot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavFloot/>
      <Header/>
      <Competences/>
      <Portifolio/>
    </Router>
  </React.StrictMode>
);


