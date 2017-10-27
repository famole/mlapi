import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_items } from '../actions/search_actions';

class Home extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			items: []
		};  
	}

	// componentWillMount() {
	// 	this.props.fetch_items();
	// }

	render() {
		return (
			<div>
					Home page.
			</div>
		)
	}
}

export default Home;