import React from 'react';
import './Hello.css'

function Hello({fName}) {
return <p className="myname" >This is Para in Hello Tag name: <strong> {fName}</strong></p>
}

export default Hello;