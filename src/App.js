import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
/*
const hello= ({name})=> "Hello World"+ name;

const hello= ({name})=>
{
   "Hello World"+ name;
}
*/

function App({name,lastName,age}) {
  return <div>
         Hello from App.js updated {name} {lastName}
         Age{age-10}
         <br/>
         <Hello fName={name}></Hello>
         </div>
}

export default App;