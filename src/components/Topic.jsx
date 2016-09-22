import React, {Component} from 'react';
import ImageStore from '../stores/image-store';
import Actions from '../actions';

export default class Topic extends Component {
	constructor(props) {
		super(props);
        this.state = {
        	images: []
        };
    }

  componentWillMount() {
		Actions.getImages(this.props.params.id);
	}

	componentDidMount() {
		this.unsubscribe = ImageStore.listen(this.onChange.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	compoentWillReciveProps(nextProps) {
		Actions.getImages(nextProps.params.id);
	}

	onChange(images) {
		console.log("images are", images);
		this.setState({
			images: images
		});
	}

	createImage() {
		return this.state.images.map((image) => {
			if (!image.is_album) {
				return <img src={image.link} width={image.width} heigth={image.height} />
			}
		})
	}

	render() {
		return (
			<div>
				{this.createImage()}
			</div>
		);
	}
}
