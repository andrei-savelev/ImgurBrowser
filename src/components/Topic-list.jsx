import React, {Component} from 'react';
import {Router, Link} from 'react-router';
import TopicStore from '../stores/topic-store';
import Actions from '../actions';

export default class TopicList extends Component {
	constructor(props) {
		super(props);
        this.state = {
        	topics: []
        };
    }

	componentWillMount() {
		Actions.getTopics();
	}

	componentDidMount() {
		this.unsubscribe = TopicStore.listen(this.onChange.bind(this));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onChange(topics) {
		this.setState({
			topics: topics
		});
	}

	render() {
		return (
			<div className="page">
				<h1>Topic List</h1>

				<section className="list-group">
					{this.renderTopics()}
				</section>
			</div>
		);
	}

	renderTopics() {
		return this.state.topics.map((topic) => {
			return (
				<Link key={topic.id} className="list-group-item">
					<h3 className="list-group-item-heading">{topic.name}</h3>
					<p className="list-group-item-text">{topic.description}</p>
				</Link>
			)
		});
	}
}