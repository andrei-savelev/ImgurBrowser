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

	componentWillReceiveProps(nextProps) {
		Actions.getImages(nextProps.params.id);
	}

	onChange(images) {
		this.setState({
			images: images
		});
	}

	createImage() {
		return this.state.images.map((image) => {
			if (!image.is_album) {
				return (
					<figure key={image.id} className="image-conteiner__item thumbnail">
						<img src={image.link} className="default-image" />
					</figure>
				)
			}
		})
	}

	render() {
		return (
			<article>
				<h1>Image list</h1>
				
				<div className="image-container">
					{this.createImage()}
				</div>
			</article>
		);
	}
}
