
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="Huey"
        timeAgo="Today at 4:45PM"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Dewey"
        timeAgo="Today at 2:00AM"
        content="I like the subject."
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Louie"
        timeAgo="Yesterday at 5:00PM"
        content="Amazing writing."
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
