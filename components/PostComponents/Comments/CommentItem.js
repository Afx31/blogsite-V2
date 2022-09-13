import React from 'react';
import './Comments.css';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteComment } from '../../../api/post';

//const CommentItem = ({ postId, auth, deleteComment, comment: { _id, text, name, avatar, user, date } }) => {
const CommentItem = () => {
  return (
    <div className='post comment-item-container row'>
      <div className='col-3 avatar-img'>
        {/* <img className='round-img' src={avatar} alt='' /> */}
        {/* <h4>{name}</h4> */}
      </div>
      <div className='col-9 comments-mobile'>
        {/* <p>{text}</p> */}
        <p className='post-date'>
          {/* Posted on <Moment format='DD/MM/YYYY'>{date}</Moment> */}
        </p>
        {/* {auth.isAuthenticated && (
          <>
            {user === auth.user._id &&
            <button
              type='button'
              className='btn btn-danger'
              onClick={(e) => deleteComment(postId, _id)}
            >
              <i className='fas fa-times' />
            </button>
            }
          </>
        )} */}
      </div>
    </div>
  )
};

export default CommentItem;

// CommentItem.propTypes = {
//   postId: PropTypes.string.isRequired,
//   comment: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
//   deleteComment: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { deleteComment })(CommentItem);