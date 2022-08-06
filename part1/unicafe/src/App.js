import { useState } from 'react';

const Total = (props) => {
  return (
    <p>all {props.good + props.neutral + props.bad}</p>
  );
}

const Average = (props) => {
  return (
    <p>average {(props.good - props.bad)/props.total}</p>
  );
}

const Positive = (props) => {
  return (
    <p>positive {props.good/props.total * 100} %</p>
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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Total good={good} neutral={neutral} bad={bad}/>
      <Average good={good} bad={bad} total={good+neutral+bad}/>
      <Positive good={good} total={good+neutral+bad}/>
    </div>
  );
}

export default App;