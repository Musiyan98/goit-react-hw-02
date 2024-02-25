import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import './App.css';

function getInitFeedback() {
  const initFeedback = window.localStorage.getItem('feedbackSipHappensCafe');
  if (initFeedback !== null) {
    return JSON.parse(initFeedback);
  }
  return { good: 0, neutral: 0, bad: 0 };
}

function App() {
  const [feedbackRates, setfeedbackRates] = useState(getInitFeedback);

  useEffect(() => {
    window.localStorage.setItem('feedbackSipHappensCafe', JSON.stringify(feedbackRates));
    console.log('Clicks updated: ', feedbackRates);
  }, [feedbackRates]);

  const totalRates =
    Number(feedbackRates.good) + Number(feedbackRates.neutral) + Number(feedbackRates.bad);

  const positiveRates = Math.round(
    ((Number(feedbackRates.good) + Number(feedbackRates.neutral)) / Number(totalRates)) * 100
  );

  const isRates = totalRates !== 0;

  return (
    <>
      <Description />
      <Options
        feedbackRates={feedbackRates}
        setfeedbackRates={setfeedbackRates}
        isRates={isRates}
      />
      {isRates ? (
        <Feedback
          feedbackRates={feedbackRates}
          totalRates={totalRates}
          positiveRates={positiveRates}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
