import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Helper2 from './Helper2';
function App() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[userrandom,setUserRandom]=useState("")
  const[age,setAge]=useState(0)
  const[gender,setGender]=useState("")
  const[pre,setPrev]=useState(0)
  const[next,setNext]=useState(0)
  const[toggle,setToggle]=useState(0)

  function submitted(){
    console.log(username,password,age,gender,userrandom)
  }
  return (
    <div className="App">
     <h1>welcome</h1>
     {toggle==0 &&(
         <form>
         <label htmlFor='username'>Username:</label>
         <input type="text" id="username" name="username" min="3" max="6" value={username} placeholder="enter username" onChange={(e)=>setUsername(e.target.value)}/>
         <label htmlFor='password'>password:</label>
         <input type="text" id="password" name="password" value={password} placeholder="enter password" onChange={(e)=>setPassword(e.target.value)}/>
        </form>
     )}
     {toggle==1 &&(
      <form>
      <label htmlFor='age'>Age:</label>
      <input type="number" id="age" name="age" value={age} placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
      <input type="radio" name="x" />Male
      <input type="radio" name="x"/>female
     </form>
   
     )}
      {toggle==2 &&(
      <form>
      <label htmlFor='age'>random:</label>
      <input type="number" id="age" name="age" value={age} placeholder="enter age" onChange={(e)=>setAge(e.target.value)}/>
     </form>
   
     )}
  {toggle==3 &&(
    <Helper2 userrandom={userrandom} setUserRandom={setUserRandom}/>
   
     )}
      <button onClick={()=>setToggle((x)=>x+1)}>next</button>
      <button onClick={()=>setToggle((x)=>x-1)}>prev</button>
      <button onClick={()=>submitted()}>submit</button>
     
    </div>
  );
}

export default App;
