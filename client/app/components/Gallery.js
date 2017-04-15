import React from 'react';

import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpg';
import dog6 from '../assets/dog6.jpg';
import dog7 from '../assets/dog7.jpg';
import dog8 from '../assets/dog8.jpg';
import dog9 from '../assets/dog9.jpg';

class Gallery extends React.Component {
	constructor(props){
    super(props);
  	this.state = {
      dogs: [
      	{id:1, name: 'Smiling dog', source:dog1, intelligence: 8, strength: 5},
        {id:2, name: 'Laughing dog', source:dog2, intelligence: 8, strength: 6},
        {id:3, name: 'Cleaning dog', source:dog3, intelligence: 8, strength: 2},
        {id:4, name: 'Long tounge dog', source:dog4, intelligence: 4, strength: 9},
        {id:5, name: 'Normal dog', source:dog5, intelligence: 3, strength: 9},
        {id:6, name: 'Serious dog', source:dog6, intelligence: 2, strength: 8},
        {id:7, name: 'Philosopher dog', source:dog7, intelligence: 2, strength: 10},
        {id:8, name: 'Japan dog', source:dog8, intelligence: 6, strength: 3},
        {id:9, name: 'Emperor dog', source:dog9, intelligence: 5, strength: 4}
      ]
    }
  }

  delete(item){
    var newState = this.state.dogs;

      // removes imagebox from this.state and creates new array with less objects;
    	newState.splice(newState.indexOf(item), 1);
      // changes state to new state with less objects;
      this.setState({data: newState})
  }

  sortValue(x){
    var sortedObjectArray = this.state.dogs;
		switch (x) {
			case 'id':
				sortedObjectArray.sort(function(a, b){
						return a.id-b.id
				})
			break;
			case 'name':
				sortedObjectArray.sort(function(a, b){
					if(a.name < b.name) return -1;
					if(a.name > b.name) return 1;
					return 0;
				})
			break;
			case 'intelligence':
				sortedObjectArray.sort(function(a, b){
						return a.intelligence-b.intelligence
				})
			break;
			case 'strength':
				sortedObjectArray.sort(function(a, b){
						return a.strength-b.strength
				})
			break;
		}

    this.setState({data: sortedObjectArray})
  }

  render(){
  	var newGallery = this.state.dogs.map((item)=>{
    	return <div className="imagebox" key={item.id}>
      	<div className="id">Id: {item.id}</div><button className="delete" onClick={this.delete.bind(this, item)}>Delete</button><img src={item.source} /><h2>{item.name}</h2><p>Intelligence: {item.intelligence}</p><p>Strength: {item.strength}</p>
      </div>
    })
  	return <div id="content">
    <div id="button-container">
		<button className="sort" onClick={this.sortValue.bind(this, 'id')}>Sort by id</button>
		<button className="sort" onClick={this.sortValue.bind(this, 'name')}>Sort by name</button>
		<button className="sort" onClick={this.sortValue.bind(this, 'intelligence')}>Sort by intelligence</button>
		<button className="sort" onClick={this.sortValue.bind(this, 'strength')}>Sort by strength</button>
		</div>
    	{newGallery}
    </div>
  }
}

module.exports = Gallery;

require('../styles/style.scss');
