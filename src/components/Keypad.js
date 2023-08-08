// Code Keypad Component Here
import React from 'react'
function Keypad() {
    function Ep() {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={Ep} />
    )
}


export default Keypad;