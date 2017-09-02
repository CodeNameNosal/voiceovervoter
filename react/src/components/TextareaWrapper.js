import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

const TextareaWrapper = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>
      <label htmlFor={props.valuePassed}>
        <TextareaAutosize
          name="comment"
          onChange={props.onChangeHandler}
          type="text"
          value={props.valuePassed}
        />
      </label>
    </form>
  )
}
export default TextareaWrapper;
