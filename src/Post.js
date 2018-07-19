import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import './Post.scss';

const Post = ({
  data: {
    avatar, name, date, content,
  },
}) => (
  <div className="post">
    <PostHeader avatar={avatar} name={name} date={date} />
    <hr />
    <p className="content">
      {content}
    </p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
