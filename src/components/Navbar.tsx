import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'; 

const Navbar = async() => {
    const { userId } = await auth();
    const isAuthenticated = !!userId;

  return (
    <div>
      <ul className='flex justify-between m-10 items-center'>
        <div>
       <Link href="/">
       <li>Home</li>
       </Link>
       </div> 
       <div className='flex gap-10'>
        {!isAuthenticated ? (
<>
<Link href="/sign-in">
       <li>Login</li>
       </Link>
       <Link href="/sign-up">
       <li>Sign Up</li>
       </Link>
</>
        ): (
<>

       <Link href="/profile">
       <li>Profile</li>
       </Link>
       <li>
        <UserButton />
       </li>
</>
        )}
       </div>
      </ul>
    </div>
  )
}

export default Navbar
