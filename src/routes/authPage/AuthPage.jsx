import './authpage.css'
import Image from '../../components/image/Image'
import { useState } from 'react'

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(false)
  const [error, setError] = useState('')
  return (
    <div className='authPage'>
      <div className='authContainer'>
        <Image path='/general/logo.png' alt='' w={36} h={36} />
        <h1>{isRegistered ? 'Create an Account' : 'Login to your account'}</h1>
        {isRegistered ? (
          <form key='registerForm'>
            <div className='formGroup'>
              <label htmlFor='userName'>Username</label>
              <input
                type='userName'
                placeholder='Username'
                name='userName'
                id='userName'
              />
            </div>

            <div className='formGroup'>
              <label htmlFor='displayName'>Display Name</label>
              <input
                type='displayName'
                placeholder='displayName'
                name='displayName'
                id='displayName'
              />
            </div>

            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Email' name='email' id='email' />
            </div>

            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                id='password'
              />
            </div>
            <button type='submit'>Register</button>
            <p onClick={() => setIsRegistered(false)}>
              Do you have an account? <b>Login</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        ) : (
          <form key='loginForm'>
            <div className='formGroup'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Email' name='email' id='email' />
            </div>

            <div className='formGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                placeholder='password'
                name='password'
                id='password'
              />
            </div>
            <button type='submit'>Login</button>
            <p onClick={() => setIsRegistered(true)}>
              Don't have an account? <b>Register</b>
            </p>
            {error && <p className='error'>{error}</p>}
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage
