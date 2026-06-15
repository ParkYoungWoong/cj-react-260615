import { useState } from 'react'
import Button from '@/components/Button'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
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
