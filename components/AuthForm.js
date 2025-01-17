"use client";

import React, { useState } from 'react';
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
        router.push('/form');  // Redirect to form page
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in:', userCredential.user);
        router.push('/form');  // Redirect to form page
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
      router.push('/form');  // Redirect to form page
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
    }
  };

  const githubSignIn = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('GitHub Sign-In successful:', result.user);
      router.push('/form');  // Redirect to form page
    } catch (error) {
      console.error('GitHub Sign-In error:', error.message);
    }
  };

  return (
    <div>
      <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isSignUp ? 'Sign Up' : 'Log In'}</button>
      <div>
        <button onClick={googleSignIn}>Sign in with Google</button>
        <button onClick={githubSignIn}>Sign in with GitHub</button>
      </div>
    </div>
  );
}
