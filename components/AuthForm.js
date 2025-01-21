"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { auth } from '../utils/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export default function AuthForm({ isSignUp = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up:', userCredential.user);
        router.push('/form');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in:', userCredential.user);
        router.push('/form');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign-In successful:', result.user);
      router.push('/form'); 
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
    }
  };

  const githubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub Sign-In successful:', result.user);
      router.push('/form');
    } catch (error) {
      console.error('GitHub Sign-In error:', error.message);
    }
  };

  return (
    <div className='h-[100vh] flex justify-center items-center'>
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#16213b] shadow-lg rounded-lg">
      <Image src='/logo.png' height={70} width={100} alt="Eleka logo" className='mx-auto -mt-10 mb-10'/>
      <h2 className="text-2xl font-semibold mb-6 text-center">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <p className='w-5/6 mx-auto text-center mb-12'>Hey, Enter your details to get <span>{isSignUp ? 'Sign Up' : 'Log In'}</span> to your account!</p>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-[#1a2744] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-10">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-[#1a2744] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAuth}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform transform"
      >
        {isSignUp ? 'Sign Up' : 'Log In'}
      </button>

      <div className='my-10 flex gap-4 items-center justify-center'>
        <div className='w-6 bg-[#9CA3AF] h-1'></div>
        <p>Or <span>{isSignUp ? 'Sign Up' : 'Log In'}</span> With</p>
        <div className='w-6 bg-[#9CA3AF] h-1'></div>
      </div>
        <button
          onClick={googleSignIn}
          className="flex justify-between items-center gap-4 mx-auto p-1 pr-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-transform transform"
        >
          <Image src='/google.png' height={35} width={35} alt="Eleka logo" className='rounded-md'/>
          <p>Sign in with Google</p>
        </button>
    </div>
    </div>
  );
}
