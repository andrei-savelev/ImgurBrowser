import Reflux from 'reflux';
import getData from '../utils/api';
import Actions from '../actions';

let TopicStore = Reflux.createStore({
	listenables: [Actions],
	getImages: function(topicId) {
		console.log("Topic id is", topicId);
		return getData('topics/' + topicId)
				.then(function (data) {
					this.images = data.data
					this.trigger(this.images);
				}.bind(this));
	}
});

export default TopicStore;