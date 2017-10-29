import React, {Component} from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { find_item } from '../actions/search_actions'

export class AppBar extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			search: undefined
		};
		this.handle_change = this.handle_change.bind(this);
		this.handle_search = this.handle_search.bind(this);
	}
	
	componentWillReceiveProps(newProps) {
		if(this.state.search !== newProps.search){
			this.setState({ search: newProps.search });
		}
	}

	handle_change(q) {
		console.log(q.target.value);
		this.setState({ search: q.target.value });
	}

	handle_search() {
		if (this.state.search !== undefined) {
			this.props.find_item(this.state.search);
		}
	}

	render() {
		const style = {
			header : {
				width: "100%",
				height: "54px",
				backgroundColor: "#fff059",
				borderBottom: "1px solid #d9d9d9",
				position: "fixed",
				zIndex: "900"
			},
			input: {
				padding: "5px 0px 5px 0px",
				borderRadius: "3px",
				width: "100%",
				height: "100%",
				border: "1px solid #ccc",
				fontSize: 16,
				float: "left",
				clear: "both"
			},
			inputContainer:{
				padding: "7px 5px",
				overflow: "auto",
				maxWidth: 750,
				height: "34px",
				margin: "auto",
				width: "50%"
			},
			icon: {
				width: 25,
				height: 25,
				left: 9,
				bottom: 6,
				position: "absolute"
			},
			iconContainer: {
				position: "absolute",
				float: "left",
				clear: "both",
				width: 42,
				height: 42,
				backgroundColor: "#f1f1f1",
				borderRadius: "0px 3px 3px 0px",
				border: "1px solid #ccc"
			},
			logo: {}
		};
		
		return (
			<div>
				<div style={style.header} >
					<div style={style.logo}>
						<div style={style.inputContainer}>
							<input 
								type="text"
								style={style.input}
								placeholder=" Nunca dejes de buscar"
								value={this.state.search}
								onChange={this.handle_change}
							/>
							<IconButton style={style.iconContainer} iconStyle={style.icon} onClick={this.handle_search}>
									<ActionSearch />
							</IconButton>
						</div>
					</div>
				</div>        
			</div>
		);
	};
}

const mapStateToProps = (state) => ({
	search: state.items_state.search
});

const mapDispatchToProps = (dispatch) => ({
  find_item: (data) => {
		dispatch(find_item(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);