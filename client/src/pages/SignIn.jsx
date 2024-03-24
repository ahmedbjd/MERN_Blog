import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import OAuth from '../components/OAuth'
import { baseURL } from '../../apiConfig';

const SignIn = () => {

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispath = useDispatch();
  const {isloading, error: errorMessage} = useSelector(state => state.user);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password) {
    return dispath(signInFailure('Please fill out all fields'));
  }
  try {
    dispath(signInStart());
    const response = await axios.post(`${baseURL}/auth/signin`, formData);
    if (response.status === 200) {
      dispath(signInSuccess(response.data.data));
      navigate('/');
    }
  } catch (error) {
    dispath(signInFailure(error.response.data.message));
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
       <p className='mt-5 text-sm'>This is a demo project. You can sign in with your email and password or with google</p>
      </div>
      <div className='flex-1 w-full'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='Your email' />
            <TextInput
              placeholder='ahmedbjd06@gmail.com'
              type='email'
              id='email'
              onChange={handleChange}
            
            />
          </div>
          <div>
            <Label value='Your password' />
            <TextInput
              placeholder='********'
              type='password'
              id='password'
              onChange={handleChange}
            
            />
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' disabled={isloading}>{isloading ? (<><Spinner size='sm' /> <span className='pl-3'>Loading...</span></> ) : 'Sign In'}</Button>
          <OAuth />
        </form>
        <div className='flex gap-3 mt-5'>
          <span>Dont Have an account?</span>
          <Link to='/sign-up' className='text-blue-500'>Sign Up</Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
        )}
      </div>
     </div>
    </div>
  )
}

export default SignIn
