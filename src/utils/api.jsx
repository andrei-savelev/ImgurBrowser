import Fetch from 'whatwg-fetch';

const ROOT_URL = 'https://api.imgur.com/3/';
const API_KEY = 'bb59f3b3367ff02';

export default function getData (sUrl) {
	return fetch(ROOT_URL + sUrl, {
		headers: {
			'Authorization': `Client-ID ${API_KEY}`
		}
	}).then((response) => response.json());
}