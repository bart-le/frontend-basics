// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
	const buttonText = 'Click me!'
	const labelText = 'Enter name:'

	return (
		<div>
			<label htmlFor="name" className="label">
				{ labelText }
			</label>
			<input id="name" type="text" />
			<button style={{ backgroundColor: 'red', color: 'white' }}>
				{ buttonText }
			</button>
		</div>
	);
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));