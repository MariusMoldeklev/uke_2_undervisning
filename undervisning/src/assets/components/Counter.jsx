import { useState } from 'react'
//need to create different functions so i can import each funcuion to the main jsx

 export function Counter() {
  console.log("running the function")
  const [count, setCount] = useState(0)

  const isEven = (count % 2 === 0)

  function increment() {
    setCount((previousValue) => previousValue + 1)
  }

  function decrement(){
    if (count > 0) {
      setCount((previousValue) => previousValue - 1)
  }
  function reset() {
    setCount(0)
  }
    return (
   <div>
    <p >Count : {count}</p>

    <button onClick={decrement}>decrement</button>
    <button onClick={reset}></button>
    <button onClick={increment} >Increment</button>
   </div>
  )
}}