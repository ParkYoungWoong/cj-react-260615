import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    const newCount = count + 1
    setCount(newCount)
    console.log(newCount)
  }

  function renderMessage() {
    if (count > 4) {
      return <h2>Hello!!</h2>
    } else if (count > 7) {
      return <h2>World~~</h2>
    } else {
      return <h2>Good...</h2>
    }
  }

  return (
    <>
      <h1
        className={`bg-yellow-500 ${count > 4 ? 'text-red-500' : ''}`}
        style={{
          fontSize: `${16 * (count + 1)}px`
        }}>
        {count}
      </h1>
      {renderMessage()}
      <button onClick={() => handleClick()}>증가</button>
    </>
  )
}

// console.log(false && 'hello' && 0) // false
// console.log('hello' && 0 && null) // 0
