import React from 'react';
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
  return <div className="myapp">
         Hello from  <strong>{name}</strong>
         <p>&#128512; &#128516; &#128525; &#128151;</p> <br/>
         <ul>
            <li>{name}</li>
            <li>{lastName}</li>
            <li>{5+10}</li>
         </ul>
         <ol>
          <li>{name}</li>
          <li>{lastName}</li>
          <li>{age}</li>
         </ol>
         <Hello fName={name}></Hello>
         </div>
}

export default App;