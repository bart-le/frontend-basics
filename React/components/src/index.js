
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Huey" />
      <CommentDetails author="Dewey" />
      <CommentDetails author="Louie" />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
