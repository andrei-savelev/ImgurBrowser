import React, {Component} from 'react';
import Button from './Button';
import ListItem from './List-item';

export default class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
	      	// open: false,
	      	itemTitle: ''
		};
	}

	handleClick() {
	    this.setState({
	    	open: !this.state.open
	    });
	}

	handleItemClick(item) {
	    this.setState({
	    	open: !this.state.open,
	    	
	    	// open: false,
	    	itemTitle: item
	    });
	}

	render() {
		var list = this.props.items.map((item) => {
		   	return <ListItem
		            	item={item}
		            	path={`topics/${item.id}`}
		              	className={this.state.itemTitle === item.name ? "active" : "" }
		              	key={item.id}
		            />
		    });

	    return (
	    	<div className="dropdown">
		      	<Button
		        	whenClicked={this.handleClick.bind(this)}
		        	className="btn-default"
		        	title={this.state.itemTitle || this.props.title}
		        	subTitleClassName="caret"
		        />

		      	<ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
		        	{list}
		      	</ul>
	    	</div>
	    )
	}
}