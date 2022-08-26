import { useEffect, useState } from 'react';
import './App.css';
import TimeCard from './components/TimeCard/TimeCard';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [timeData, setTimeData] = useState();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('weekly');
  const [loading, setLoading] = useState(true);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        'https://wookie.codesubmit.io/time-tracking',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const json = await response.json();
      setTimeData(json);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <div id="pageContainer">
          <div id="cardsContainer">
            <UserCard
              userName="Jeremy Robson"
              setSelectedTimeFrame={setSelectedTimeFrame}
            />
            <TimeCard
              id="workCard"
              title="work"
              timeData={timeData[0]}
              selectedTimeFrame={selectedTimeFrame}
            />
            <TimeCard
              id="playCard"
              title="play"
              timeData={timeData[1]}
              selectedTimeFrame={selectedTimeFrame}
            />
            <TimeCard
              id="studyCard"
              title="study"
              timeData={timeData[2]}
              selectedTimeFrame={selectedTimeFrame}
            />
            <TimeCard
              id="exerciseCard"
              title="exercise"
              timeData={timeData[3]}
              selectedTimeFrame={selectedTimeFrame}
            />
            <TimeCard
              id="socialCard"
              title="social"
              timeData={timeData[4]}
              selectedTimeFrame={selectedTimeFrame}
            />
            <TimeCard
              id="selfCareCard"
              title="selfCare"
              timeData={timeData[5]}
              selectedTimeFrame={selectedTimeFrame}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
