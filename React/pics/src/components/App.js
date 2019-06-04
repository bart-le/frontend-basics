import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID c24d146ddd71a53a965d1b64707549e8cd985c939dc46273efbde7a6a2f270a0'
			}
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={ this.onSearchSubmit } />
			</div>
		);
	}
}

export default App;