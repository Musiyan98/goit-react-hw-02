import css from './FeedbackButton.module.css';

const FeedbackButton = ({ changeTypeRate, nameRate, className }) => {
  // let buttonClass = css.{className};
  // console.log(buttonClass);
  // const buttonClassNames = () => {
  //   buttonClass.push(`css.${className}`);
  //   console.log(buttonClass.join(''));
  //   return buttonClass.join('');
  // };
  return (
    <button className={css[className]} onClick={changeTypeRate}>
      {nameRate}
    </button>
  );
};

export default FeedbackButton;
