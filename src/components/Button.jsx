import React, {Component} from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	
  	render() {
    	return (
    		<button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      			{this.props.title}
      			<span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    		</button>
    	)
  	}
}