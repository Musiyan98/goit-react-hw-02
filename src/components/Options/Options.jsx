// import css from './Options.module.css';
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
      <FeedbackButton className={'good'} changeTypeRate={changeGoodRates} nameRate={'Good'} />
      <FeedbackButton
        className={'neutral'}
        changeTypeRate={changeNeutralRates}
        nameRate={'Neutral'}
      />
      <FeedbackButton className={'bad'} changeTypeRate={changeBadRates} nameRate={'Bad'} />
      {isRates ? (
        <FeedbackButton className={'reset'} changeTypeRate={resetRates} nameRate={'Reset'} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Options;
