import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from '../presenter/AppBar';

class MainLayout extends Component {
	constructor(props) {
		super(props);
		
		}
	
	handleSearch(){

	}

	render() {
		MainLayout.propTypes = {
			children: React.PropTypes.object.isRequired
		};
		return (
      <div >
				<AppBar />
				<div style={{padding: '100px', minHeight: '100px'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainLayout;
