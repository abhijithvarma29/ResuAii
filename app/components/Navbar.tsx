import React from 'react'
import { Link, useNavigate } from 'react-router'
import { usePuterStore } from '~/lib/puter';

const Navbar = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/auth');
  }

  return (
    <nav className='navbar'>
        <Link to="/">
            <p className='text-2xl font-bold text-gradient'>ResuAi</p>
        </Link>
        <Link to="/upload" className='primary-button w-fit'>
            Upload Resume  
        </Link>
        <button className='primary-button w-fit ml-4' onClick={handleLogout}>
          Logout
        </button>
    </nav>
  )
}

export default Navbar