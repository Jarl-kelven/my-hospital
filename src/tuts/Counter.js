
import React, {useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    function increment() {
        setCount(count+1)
    }
  return (
    <div>
    <p>count: {count}</p>
    <button onClick={increment}>Increment</button>
    
    </div>
  )
}

export default Counter


