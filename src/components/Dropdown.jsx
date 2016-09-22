import React, {Component} from 'react';
import Button from './Button';
import ListItem from './List-item';

export default class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	changeDropdownState() {
		this.setState({
	    	open: !this.state.open
	    });
	}

	handleClick() {
	    this.changeDropdownState()
	}

	handleItemClick(item) {
	    this.changeDropdownState()
	}

	createListItem() {
		return this.props.items.slice(0, 4).map((item) => {
		   	return <ListItem
		            	item={item}
		            	path={`/topics/${item.id}`}
		              	key={item.id}
		              	whenItemClicked={this.handleClick.bind(this)}
		            />
		});

	}

	render() { 
	    return (
	    	<li className="dropdown">
		      	<Button
		        	whenClicked={this.handleClick.bind(this)}
		        	title={this.props.title}
		        	subTitleClassName="caret"
		        />

		      	<ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
		        	{this.createListItem()}
		      	</ul>
	    	</li>
	    )
	}
}