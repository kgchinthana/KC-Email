import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import login from '../components/images/login.png';
import swal from 'sweetalert';
import { Image } from 'react-bootstrap';

import { TextField, Grid, Container, Button } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textInputErrorMessageEmail, setTextInputErrorMessageEmail] =
    useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/logincustomer/${email}/${password}`,
        email,
        password
      );
      console.log(response.data, 'Login Success');
      if (response.data) {
        localStorage.setItem('token', response.data.token);
        setEmail('');
        setPassword('');
        navigate('/admin-dashboard');
        window.location.reload();
      }
    } catch (error) {
      swal('Invalid Credential!', '', 'error'); // Show success message
      setEmail('');
      setPassword('');
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;

    // Regular expression to allow integers, alphabets and special characters
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    // Check if the input matches the pattern or is empty
    if (emailRegex.test(inputValue) || inputValue !== ' ') {
      setEmail(inputValue);
    } else {
      setTextInputErrorMessageEmail('*Please enter a valid email address');
    }
  };
  return (
    <Container>
      <div className='login__customer__container '>
        <Grid container spacing={2}>
          {/* Left side with register customer image */}
          <Grid item xs={12} md={6}>
            <div className='login__customer__img'>
              <Image src={login} fluid alt='login image' />
            </div>
          </Grid>

          {/* Right side with form components */}
          <Grid item xs={12} md={6}>
            {/* Form */}
            <div className='login__customer__form'>
              <form onSubmit={handleLogin}>
                <Grid item xs={12}>
                  {/* Heading */}
                  <div className='login__customer__heading'>
                    <h2>Login</h2>
                  </div>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {/* Email */}
                    <TextField
                      className='input-text-login'
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      value={email}
                      type='text'
                      helperText={textInputErrorMessageEmail}
                      onChange={handleEmailChange}
                      size='small'
                      style={{ width: '80%' }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Password */}
                    <TextField
                      className='input-text-login'
                      id='outlined-password-input'
                      label='Password'
                      variant='outlined'
                      type='password'
                      value={password}
                      autoComplete='current-password'
                      size='small'
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: '80%',
                        marginBottom: '5%',
                        height: '5%',
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} style={{ width: '70%' }}>
                    {/* Signin Button */}
                    <div className='login__vehicle__submitbtn'>
                      <Button type='submit' variant='contained'>
                        Login
                      </Button>
                    </div>
                  </Grid>
                  <Grid item xs={6} style={{ width: '70%' }}>
                    {/* Forgot Password */}
                    <div className='forgot__password'>
                      <a href='/forgot-password'>Forgot Password?</a>
                    </div>
                  </Grid>
                  <Grid item xs={6} style={{ width: '70%' }}>
                    {/* Remember Me */}
                    <div className='option_div'>
                      <div className='remember__me'>
                        <input type='checkbox' />
                        <span> Remember me</span>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12} style={{ width: '100%' }}>
                    {/* move to signup */}
                    <div className='already__have__an__account'>
                      <p>
                        Don't have an account? <Link to='/'>Create</Link>
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;
