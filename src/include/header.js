import React from 'react';
import Card from '../components/Card';

const Header = () => (
  <div id="header">
     
      <header className="App-header">
       <h2 align='center' class="card-title">Time To Play!</h2>
        <img src={require('../img/card.jpg')} alt="profile" className="App-card"/>
       <Card />
      </header>
  </div>
);

export default Header;
