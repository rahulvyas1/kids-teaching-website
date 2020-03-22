import React from 'react';
import Routes from './routes';
import Header from './layout/Header';
import Footer from './layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
