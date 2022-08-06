import { useState } from 'react';

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  );  
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;
  if (total === 0) return <p>No feedback given</p>; 
  return (
    <div>
      <StatisticsLine text="good" value={good}/>
      <StatisticsLine text="neutral" value={neutral}/>
      <StatisticsLine text="bad" value={bad}/>
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="average" value={(good - bad)/total}/>
      <StatisticsLine text="positive" value={good/total * 100} />
    </div>
  );
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good+1);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1);
  }

  const handleBadClick = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <h1>statistics</h1>
      <Button handleClick={handleGoodClick} text={'good'} />
      <Button handleClick={handleNeutralClick} text={'neutral'} />
      <Button handleClick={handleBadClick} text={'bad'} />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;