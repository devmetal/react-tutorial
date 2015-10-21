'use strict';

let React = require('react');
let Partner = require('./Partner.react');

let AddressBook = React.createClass({
	getInitialState(){
		return {
			partners:[
				{name: 'Adam', email:'adam@gmail.com'},
				{name: 'Peter', email:'peter@gmail.com'},
				{name: 'Gabor', email:'gabor@gmail.com'},
			]
		}
	},
	
	render() {
		let partners = this.state.partners.map((partner) => { 
			return (<Partner name={partner.name} email={partner.email} key={partner.email} />);
		});
		
		
		return (
			<div id="address-book">
				{partners}
			</div>
		);	
	}
});

module.exports = AddressBook;