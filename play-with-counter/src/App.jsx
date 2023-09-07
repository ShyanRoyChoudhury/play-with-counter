import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';

function App(){
  const [counter, setCounter] = useState(0);
  return(
    <div style={{display:"flex",
    justifyContent:"center"}}>
      <Card style={{
        width:600,
        }}>
        <Typography textAlign={'center'}>Welcome to counter game</Typography>
        <Buttons counter = {counter} setCounter = {setCounter}/>
        <CounterComponent counter = {counter}/>
      </Card>
    </div>
  )
}

function Buttons({counter, setCounter}){
  return(
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Increase counter={counter} setCounter={setCounter}/>
      <Decrease setCounter={setCounter}/>
    </div>
  )
}
function Increase({counter, setCounter}){
  return (
    <div>
      <Button variant='contained' onClick={()=>{return setCounter(counter+1)}}>Increase Counter</Button>
    </div>
  )
}

function Decrease({setCounter}){
  return(
    <div>
      <Button variant='contained' onClick={(counter)=>{return setCounter((counter)=>counter-1)}}>Decrease Counter</Button>    
    </div>
  )
}

function CounterComponent({counter}){
  return(
    <div >
      <Typography textAlign={'center'} variant='h4'>{counter}</Typography>
    </div>
  )
}
export default App;