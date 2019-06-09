import axios from 'axios';

const KEY = 'AIzaSyCK27ko1C-sNh9tz3LjgD_N4cttsF8-Xrw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
