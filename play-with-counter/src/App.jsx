import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { createContext, useContext, useState } from 'react';

const CountContext = createContext();


function App(){
  const [counter, setCounter] = useState(0);
  return(
    <CountContext.Provider value={{
      counter: counter,
      setCounter: setCounter
    }}>
      <div style={{display:"flex",
      justifyContent:"center"}}>
        <Card style={{
          width:600,
          }}>
          <Typography textAlign={'center'}>Welcome to counter game</Typography>
          <Buttons />
          <CounterComponent />
        </Card>
      </div>
    </CountContext.Provider>
  )
}

function Buttons(){
  return(
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Increase />
      <Decrease />
    </div>
  )
}
function Increase(){
  const {counter, setCounter} = useContext(CountContext);
  return (
    <div>
      <Button variant='contained' onClick={()=>{return setCounter(counter+1)}}>Increase Counter</Button>
    </div>
  )
}

function Decrease(){
  const { counter, setCounter } = useContext(CountContext);
  return(
    <div>
      <Button variant='contained' onClick={(counter)=>{return setCounter((counter)=>counter-1)}}>Decrease Counter</Button>    
    </div>
  )
}

function CounterComponent(){
  const {counter} = useContext(CountContext);
  return(
    <div >
      <Typography textAlign={'center'} variant='h4'>{counter}</Typography>
    </div>
  )
}
export default App;