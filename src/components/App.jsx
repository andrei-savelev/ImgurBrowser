import React, { Component } from 'react';
import Header from './Header';
import TopicList from './Topic-list'

export default class Main extends Component {
  render() {
    return (
      <div>
      	<Header />

      	<main>
      		{this.getContent()}
      	</main>
      </div>
    );
  }

  getContent() {
  	return this.props.children || <TopicList />
  }
}