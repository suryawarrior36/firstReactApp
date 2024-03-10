import React, { useState } from 'react'

const CounterPageComponent = () => {
  
  const [countNumber, setcountNumber] = useState(0)
  const incrementFunction = () => {
    setcountNumber(countNumber +1)
  }
  const decrementFunction = () => {
    setcountNumber(countNumber -1)
  }
    return (
    <React.Fragment>
        <button onClick={incrementFunction}>+1</button>
        <p>{countNumber}</p>
        <button onClick={decrementFunction}>-1</button>
    </React.Fragment>
  )
}

export default CounterPageComponent