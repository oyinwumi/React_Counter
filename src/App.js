import { useState }from 'react';
import  "./App.css"


function App() {
 const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
        <button className='button' onClick={()=> setCounter(prevCount => prevCount - 1)}>-</button>
        <h1>{counter}</h1>
        <button  className='button' onClick={() => setCounter(prevCount => prevCount + 1)}>+</button>
        <button  className='button1' onClick={() => setCounter(prevCount => prevCount = 0)} >Reset</button>
    </div>
  );
}

export default App;
