import { redirect } from 'react-router'

interface Context {
  request: Request
}

// 17:02

export function requiresAuth({ request }: Context) {
  // request.url // 'http://localhost:5173/movies' // '/movies'
  const url = new URL(request.url)
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true // 통과!
  }
  return redirect(`/signin?callbackUrl=${url.pathname}`)
  // '/signin?callbackUrl=/movies'
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return [] // 통과!
  }
  return redirect('/')
}
