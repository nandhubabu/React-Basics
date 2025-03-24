import React, {useState} from 'react';
import './App.css';

function App() {
const now = new Date().toLocaleTimeString();

setInterval(updatetime,1000);

const [time,setTime] = useState(now);

function updatetime(){
  const newtime = new Date().toLocaleTimeString();
  setTime(newtime);
}

  return (
    <div className='container'>
      <h1>{time}</h1>
      <button onClick={updatetime}>Get Time</button>
    </div>  
  );
}

export default App;
