var React = require('react');
var ReactDOM = require('react-dom');
var Welcome = require('./components/Welcome');
var Gallery = require('./components/Gallery');

ReactDOM.render(
  <div>
    <Welcome />
    <Gallery />
  </div>,
  document.getElementById('app')
);
