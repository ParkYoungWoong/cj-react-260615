import { useState } from 'react'
import Button from '@/components/Button'
import { useCountStore } from '@/stores/count'

// 10:01

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const count = useCountStore(s => s.count)
  const increase = useCountStore(s => s.increase)

  return (
    <>
      <h1 onClick={() => increase()}>{count}</h1>
      <Button
        loading={isLoading}
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false)
          }, 3000)
        }}>
        저장
      </Button>
    </>
  )
}
