// import css from './Feedback.module.css';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const Options = ({ feedbackRates, setfeedbackRates, isRates }) => {
  const changeGoodRates = () => {
    setfeedbackRates({
      ...feedbackRates,
      good: `${Number(feedbackRates.good) + 1}`,
    });
  };
  const changeNeutralRates = () => {
    setfeedbackRates({
      ...feedbackRates,
      neutral: `${Number(feedbackRates.neutral) + 1}`,
    });
  };
  const changeBadRates = () => {
    setfeedbackRates({
      ...feedbackRates,
      bad: `${Number(feedbackRates.bad) + 1}`,
    });
  };

  const resetRates = () => {
    setfeedbackRates({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <FeedbackButton changeTypeRate={changeGoodRates} nameRate={'Good'} />
      <FeedbackButton changeTypeRate={changeNeutralRates} nameRate={'Neutral'} />
      <FeedbackButton changeTypeRate={changeBadRates} nameRate={'Bad'} />
      <FeedbackButton changeTypeRate={resetRates} nameRate={'Reset'} isEnabled={!isRates} />
    </div>
  );
};

export default Options;
