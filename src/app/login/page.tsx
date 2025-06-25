'use client'

import { useFormState } from 'react-dom'
import { loginUser } from '../actions/login'

export default function LoginPage() {
  const [state, formAction] = useFormState(
    async (prevState: { success: boolean; error?: string }, formData: FormData) => {
      return await loginUser(formData);
    },
    { success: false }
  )

  return (
    <form action={formAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      {state.success ? <p>Login successful</p> : <p>{state.error}</p>}
    </form>
  )
}
