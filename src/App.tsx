import { useState } from 'react'
import Button from '@/components/Button'

export default function App() {
  return (
    <>
      <Button loading={true}>증가</Button>
      <Button>감소</Button>
      <Button>취소</Button>
      <Button>저장</Button>
    </>
  )
}
