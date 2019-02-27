
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="Huey"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
      />
      <CommentDetails
        author="Dewey"
        timeAgo="Today at 2:00AM"
        content="I like the subject."
      />
      <CommentDetails
        author="Louie"
        timeAgo="Yesterday at 5:00PM"
        content="Amazing writing."
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
