import { redirect } from 'react-router'

export function requiresAuth() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true // 통과!
  }
  return redirect('/signin')
}
