import React from 'react';
import PropTypes from 'prop-types';
import './PostHeader.scss';

const PostHeader = ({ avatar, name, date }) => (
  <div className="post-header">
    <div className="avatar">
      <img src={`imgs/${avatar}`} alt="avatar" />
    </div>
    <div className="container-infos">
      <div className="name">
        {name}
      </div>
      {' '}
      <div className="date">
        {`há ${date}`}
      </div>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
