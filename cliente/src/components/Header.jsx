import { Navbar, TextInput, Button } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";


const Header = () => {

const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2 text-sm sm:text-xl'>
      <Link to='/' className='font-semibold dark:text-white whitespace-nowrap'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-3 text-white'>Ahmed's</span>
        <span>Blog</span>
      </Link>
      
    <form>
        <TextInput 
       type='text'
       placeholder='Search'
       rightIcon={IoIosSearch}
       className='hidden lg:inline'
      />
    </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <IoIosSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <MdDarkMode />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>
            Sign In
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>

     <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
