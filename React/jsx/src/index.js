
// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click me!'
}

// Create a React component
const App = () => {
  return (
    <div>
      <label for="name" className="label">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'red', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
