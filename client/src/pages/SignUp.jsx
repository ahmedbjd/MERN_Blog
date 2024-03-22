import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
     <div className='max-w-4xl p-4 flex flex-col mx-auto md:flex-row items-center gap-6 max-md:w-full'>
           <div className='flex-1'>
        <Link to='/' className='font-semibold dark:text-white whitespace-nowrap text-4xl'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-3 text-white'>Ahmed's</span>
        <span>Blog</span>
      </Link>
       <p className='mt-5 text-sm'>This is a demo project. You can sign up with your email and password or with google</p>
      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='Your username' />
            <TextInput
              placeholder='Username'
              type='text'
            />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput
              placeholder='Email'
              type='text'
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              placeholder='Password'
              type='text'
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default SignUp
