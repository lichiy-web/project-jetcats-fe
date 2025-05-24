import { Field } from 'formik';
import s from './InputComment.module.css';

const InputComment = () => {
  return (
    <Field
      name="comment"
      type="text"
      placeholder="Comment"
      className={s.inputComment}
    />
  );
};

export default InputComment;
