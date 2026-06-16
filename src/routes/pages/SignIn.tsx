import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export default function SignIn() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')
  // '/movies'

  function signIn() {
    if (id.trim() && pw.trim()) {
      // 로그인 성공!
      const accessToken = 'username=HEROPY&email=thesecon@gmail.com&expires=300'
      localStorage.setItem('accessToken', accessToken)
      navigate(callbackUrl || '/')
    }
  }

  return (
    <>
      <h1>Sign In Page!</h1>
      <input
        type="text"
        value={id}
        onChange={event => setId(event.target.value)}
      />
      <input
        type="password"
        value={pw}
        onChange={event => setPw(event.target.value)}
      />
      <button onClick={() => signIn()}>로그인</button>
    </>
  )
}
