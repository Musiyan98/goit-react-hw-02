// import css from './Description.module.css';

const FeedbackButton = ({ changeTypeRate, nameRate, isEnabled }) => {
  return (
    <button onClick={changeTypeRate} disabled={isEnabled}>
      {nameRate}
    </button>
  );
};

export default FeedbackButton;
