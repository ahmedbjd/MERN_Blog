import { Button } from 'flowbite-react'
import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from '../firebase';
import axios from 'axios';
import { baseURL } from '../../apiConfig';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/UserSlice';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
  
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            console.log(resultFromGoogle);
            const response = await axios.post(`${baseURL}/auth/google`,  {
                name: resultFromGoogle.user.displayName,
                email: resultFromGoogle.user.email,
                photo: resultFromGoogle.user.photoURL
            });
            if (response.status === 200){
               // console.log('hhhhhhhhhh',response.data.data)
               dispath(signInSuccess(response.data.data));
               navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Button gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick} >
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        Continue with Google
    </Button>
  )
}

export default OAuth
