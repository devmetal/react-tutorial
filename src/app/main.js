'use strict';

(function(){
	require("babelify/polyfill");
	let ReactDOM = require('react-dom');
	let React = require('react');
	let AddressBook = require('./components/AddressBook.react');
	
	let target = document.createElement("div");
	ReactDOM.render(<AddressBook />, target);
	document.body.appendChild(target);
	
	window.React = React;
})();