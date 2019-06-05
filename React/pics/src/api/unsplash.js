import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID c24d146ddd71a53a965d1b64707549e8cd985c939dc46273efbde7a6a2f270a0'
	}
});