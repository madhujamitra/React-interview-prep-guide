import React, { useState,useRef, useEffect } from "react"

export default function Timer(){
const[startTime, setStartTime] = useState(0)
const[stopTime , setStopTime] = useState(false)
const[current , setCurrent] = useState(0)
let intervalRef = useRef();


const timmerStart= () =>{
setStopTime(!stopTime)
}



    return (
        <>
        <div>
            <div>{current}</div>
            <button onClick={timmerStart}>{stopTime ? "Start the timmer" : "Stop the timmer"}</button>
            
        </div>
        
        </>
    )
}