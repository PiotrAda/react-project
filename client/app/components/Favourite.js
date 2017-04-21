import React from 'react';

class Favourite extends React.Component {
  render(){
  	return <div id="favourite">
    <button className="fav" onClick={this.props.onClick}>Favoutite</button>
    </div>
  }
}

module.exports = Favourite;
