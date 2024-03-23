import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage("Please fill out all fields");
    }
    try {
        setErrorMessage(null);
        setIsloading(true);
      const response = await axios.post('http://localhost:4000/api/auth/signup', formData);
      if (response.data.msg === 'Signup successful'){
        navigate('/sign-in');
      }
    } catch (error) {
         setErrorMessage(error.response?.data?.message || 'An error occurred');
  } finally {
    setIsloading(false);
  }
  } 

  return (
    <div className='min-h-screen mt-20'>
     <div className='max-w-4xl p-4 flex flex-col mx-auto md:flex-row items-center gap-6'>
           <div className='flex-1 w-full'>
        <Link to='/' className='font-semibold dark:text-white whitespace-nowrap text-4xl max-sm:text-2xl'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl py-2 px-3 text-white'>Ahmed's</span>
        <span>Blog</span>
      </Link>
       <p className='mt-5 text-sm'>This is a demo project. You can sign up with your email and password or with google</p>
      </div>
      <div className='flex-1 w-full'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your username' />
            <TextInput
              placeholder='Username'
              type='text'
              id='username'
              onChange={handleChange}
            
            />
          </div>
          <div>
            <Label value='Your email' />
            <TextInput
              placeholder='Email'
              type='email'
              id='email'
              onChange={handleChange}
            
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              placeholder='Password'
              type='password'
              id='password'
              onChange={handleChange}
            
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={isloading}>{isloading ? (<><Spinner size='sm' /> <span className='pl-3'>Loading...</span></> ) : 'Sign Up'}</Button>
        </form>
        <div className='flex gap-3 mt-5'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
        )}
      </div>
     </div>
    </div>
  )
}

export default SignUp
