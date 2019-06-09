import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	render() {
		return (
			<div className="ui segment search-bar">
				<form className="ui form">
					<div className="field">
						<label htmlFor="">Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
