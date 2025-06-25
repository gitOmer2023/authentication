// app/actions/get-session.ts (Server Action)

'use server'

import { cookies } from 'next/headers'

export async function getSession() {
  const cookieStore = cookies()
  const token = (await cookieStore).get('session-token')?.value

  if (!token) return { authenticated: false }

  // Optionally verify token
  return {
    authenticated: true,
    token,
  }
}
