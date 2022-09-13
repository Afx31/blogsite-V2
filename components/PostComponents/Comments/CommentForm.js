import React, { useState } from 'react';
import './Comments.css';
import PropTypes from 'prop-types';
import { addComment } from '../../../api/post';

//const CommentForm = ({ auth: { isAuthenticated, loading }, postId, addComment }) => {
const CommentForm = () => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    // e.preventDefault();
    // addComment(postId, { text });
    // setText('');
  };

  const authForm = (
    <>
      <textarea
        className='comment-textarea'
        name='text'
        rows='5'
        placeholder='Enter your comment here...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input type='submit' className='btn btn-success my-1' value='Submit' />
    </>
  );

  const guestForm = (
    <>
      <h5>Please make an account to leave a comment</h5>
      <textarea
        className='comment-textarea'
        name='text'
        rows='5'
        placeholder='Enter your comment here...'
        disabled
      />
      <input type='submit' className='btn btn-success my-1' disabled />
    </>
  );

  // NOTE
  // Forcing guestForm whilst user auth is being configured as that'll change the auth setup
  // around user details and whether someone is authed or not
  //
  return (
    <div className='post-form'>
      <h3>Leave a Comment</h3>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          {guestForm}
          {/* {!loading && <>{ isAuthenticated ? authForm : guestForm }</>} */}
        </div>
      </form>
    </div>
  )
};

export default CommentForm;

// CommentForm.propTypes = {
//   addComment: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { addComment })(CommentForm);