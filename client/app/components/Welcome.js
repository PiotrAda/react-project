import React from 'react';

class Welcome extends React.Component {
  render(){
  	return <div id="welcome">
      <h1>Welcome to the ultimate dog sorting app!</h1>
      <h2>Feautures include sorting dogs by varius attributes and deleting dogs.</h2>
      <h2>Purpose of this site is to practice working in react.</h2>
    </div>
  }
}

module.exports = Welcome;

require('../styles/welcome.scss');
