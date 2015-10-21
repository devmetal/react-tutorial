'use strict';

let React = require('react');

let Partner = React.createClass({
	render(){
		return(
			<div className="partner">
				<span className="name">{this.props.name}</span>
				<span className="email">{this.props.email}</span>
			</div>
		)
	}
});

module.exports = Partner;