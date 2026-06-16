import { redirect } from 'react-router'

interface Context {
  request: Request
}

export function requiresAuth({ request }: Context) {
  // request.url // 'http://localhost:5173/movies/a/b/c/d?a=1&b=2&c=3' // '/movies'
  const url = new URL(request.url)
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true // 통과!
  }
  return redirect(`/signin?callbackUrl=${url.pathname + url.search}`)
  // '/signin?callbackUrl=/movies'
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return [] // 통과!
  }
  return redirect('/')
}
