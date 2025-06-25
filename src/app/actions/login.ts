// app/actions/login.ts (Server Action)

'use server'

import { cookies } from 'next/headers'

export async function loginUser(formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  // Example: Validate credentials (replace with real logic)
  if (username === 'admin' && password === 'securepassword') {
    const cookieStore = cookies()

    ;(await cookieStore).set('session-token', 'your-secure-session-token', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return { success: true }
  }

  return { success: false, error: 'Invalid credentials' }
}
