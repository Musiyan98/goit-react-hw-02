const Feedback = ({ feedbackRates, totalRates, positiveRates }) => {
  return (
    <div>
      <p>Good: {feedbackRates.good}</p>
      <p>Neutral: {feedbackRates.neutral}</p>
      <p>Bad: {feedbackRates.bad}</p>
      <p>Total: {totalRates}</p>
      <p>Positive: {positiveRates}</p>
    </div>
  );
};

export default Feedback;
// feedbackRates;
