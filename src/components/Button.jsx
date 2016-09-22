import React, {Component} from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}
	
  	render() {
    	return (
    		<a onClick={this.props.whenClicked} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      			{this.props.title}
      			<span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    		</a>
    	)
  	}
}