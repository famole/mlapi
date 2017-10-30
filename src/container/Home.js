import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import GridItemList from '../presenter/GridItemList';
import { fetch_items } from '../actions/search_actions';

export class Home extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			items: [],
			search: undefined
		};  
	}

	componentWillMount() {
		console.log(this.props.match.params.id);
		console.log(this.props.location.search);

	}

	componentWillReceiveProps(newProps) {
		if (newProps.search !== this.state.search) {
			this.setState({ search: newProps.search });
			this.props.fetch_items(newProps.search);
			console.log("TEST");
		}
		this.setState({ items: newProps.items });
	}

	render() {
		return (
			<div>
				<GridList padding={0} cols={1} cellHeight={220} >
					{this.state.items.map((item, i) => (
						<GridItemList
							key={item.id}
							id={item.id}
							price={item.price.amount}
  						image={item.picture}
  						title={item.title}
  						condition={item.condition}
							/>
					))}
				</GridList>
			</div>
		);
	}
}

Home.propTypes = {
	items: React.PropTypes.array
};

const mapStateToProps = (state) => ({
	items: state.items_state.items,
	search: state.items_state.search
});

const mapDispatchToProps = (dispatch) => ({
  fetch_items: (data) => {
		dispatch(fetch_items(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
