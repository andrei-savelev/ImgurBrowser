import getData from '../utils/api';
import Reflux from 'reflux';
import Actions from '../actions'

let TopicStore = Reflux.createStore({
	listenables: [Actions],
	getTopics: function() {
		return getData('topics/defaults')
				.then(function (data) {
					this.topics = data.data;
					this.trigger(this.topics);
				}.bind(this));
	}
});

export default TopicStore;