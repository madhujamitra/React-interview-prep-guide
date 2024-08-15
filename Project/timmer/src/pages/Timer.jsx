import React, { useState, useRef, useEffect } from "react";

export default function Timer() {
  const [timmer, setTimmer] = useState(false);
  const [current, setCurrent] = useState(0);
  let intervalId = useRef(null);

  const hour = Math.floor(current/3600)
  const min = Math.floor((current% 3600)/60)
  const sec = current % 60

  const timmerStart = () => {
    if (timmer === false) {
      intervalId.current = setInterval(() => {
        setCurrent((pre) => pre + 1);
      }, 1000);
      setTimmer(true);
    } else {
      clearInterval(intervalId.current);
      setTimmer(false);
    }
  };

  const resetTimmer = () => {
    clearInterval(intervalId.current);
    setCurrent(0);
    setTimmer(false);
  };

  

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);
  return (
    <>
      <div>
        <div>{hour}:{min}:{sec}</div>
        <button onClick={timmerStart}>
          {timmer ? "Start the timmer" : "Stop the timmer"}
        </button>
        <button onClick={resetTimmer}>reset timmer</button>
      </div>
    </>
  );
}
