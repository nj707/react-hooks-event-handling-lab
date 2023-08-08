// Code EyesOnMe Component Here
import React from "react"

function EyesOnMe() {
    function blur() {
        console.log("Hey! Eyes on me!")
    }
    function focus() {
        console.log("Good!")
    }

    return (<button onFocus={focus} onBlur={blur}>Eyes on me
    </button>
    )
}

export default EyesOnMe