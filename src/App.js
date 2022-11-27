import './App.css';
import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  const [newTime, setNewTime] = useState("");
  // not started = 0;
  // started = 1
  // stopped = 2

  const setTimer = (e) => {
    e.preventDefault();
    setNewTime(e.target.value);
  };
  // console.log(newTime);

  let newMinutes = Math.trunc(newTime % (60 * 60) / 60);
  let newSeconds = (newTime % (60 * 60)) % 60;
  let newHours = Math.trunc(newTime / (60 * 60));
  // console.log("Часы", newHours);
  // console.log("Мин", newMinutes);
  // console.log("Сек", newSeconds);
  var updatedS = time.s, updatedM = time.m, updatedH = time.h;
  updatedM = newMinutes;
  updatedS = newSeconds;
  updatedH = newHours;

  const start = () => {
    if (newTime !== "") {
      run();
      setStatus(1);
      setInterv(setInterval(run, 1000));
    }  
  };

  // console.log(time);

  const run = () => {
    if (updatedH === 0 && updatedM === 0 && updatedS === 0) {
      setNewTime("");
      return;
    }
    if (updatedS >= 0) {
      updatedS--;
    }
    if (updatedS === -1) {
      updatedM--;
      updatedS = 59;
    }
    if (updatedM === -1) {
      updatedH--;
      updatedM = 59;
    }
    return setTime({s: updatedS, m: updatedM, h: updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setTime({ s: 0, m: 0, h: 0 });
    setNewTime("");
    setStatus(2);
  };

  return (
    <div className="App" >
      <div className='mainSection'>
        <div className="setTime">
          <input placeholder="seconds" type="number" value={newTime} onChange={setTimer}/>
          <BtnComponent status={status} stop={stop} start={start} />
        </div>
        <div className="clockHolder" >
          <div className="stopWatch" ><DisplayComponent time={time} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;