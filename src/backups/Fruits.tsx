import { useState } from 'react'

export default function App() {
  // const fruits = ['사과', '바나나', '체리']
  const [fruits, setFruits] = useState(['사과', '바나나', '체리'])
  const [fruitName, setFruitName] = useState('')

  function addFruit() {
    setFruits([...fruits, fruitName])
    setFruitName('')
  }

  return (
    <>
      <h1>과일 리스트</h1>
      <input
        type="text"
        value={fruitName}
        onChange={event => {
          setFruitName(event.target.value)
        }}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') addFruit()
        }}
      />
      <button onClick={() => addFruit()}>추가</button>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}
