import { useState } from 'react';

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  return (
    <div>
      <p>good {props.good}</p>
      <p>good {props.neutral}</p>
      <p>good {props.bad}</p>
      <p>all {total}</p>
      <p>average {(props.good - props.bad)/total}</p>
      <p>positive {props.good/total * 100} %</p>
    </div>
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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <br />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

export default App;