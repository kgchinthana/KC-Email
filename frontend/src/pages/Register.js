import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';
import register from '../components/images/register.jpeg';
import swal from 'sweetalert';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { TextField, Grid, Container, Button } from '@mui/material';
import { Image } from 'react-bootstrap';


const Register = () => {
  const [first_name, setFname] = useState('');
  const [last_name, setLname] = useState('');
  const [birthday, setBirthday] = useState(dayjs());
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textInputErrorMessageEmail, setTextInputErrorMessageEmail] =
    useState(null);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/registercustomer', {
        first_name,
        last_name,
        status,
        email,
        password,
        birthday,
      })
      .then(() => {
        swal('Registered!', '', 'success'); // Show success message
        setFname('');
        setLname('');
        setStatus('');
        setEmail('');
        setBirthday('');
        setPassword('');
        navigate('/login');
      })
      .catch((error) => {
        swal('Email  is already exist!', '', 'error'); // Show success message
        setFname('');
        setLname('');
        setStatus('');
        setBirthday('');
        setEmail('');
        setPassword('');
      });
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
      <div className='register__customer__container '>
        <Grid container spacing={2}>
          {/* Left side with register customer image */}
          <Grid item xs={12} md={6}>
            <div className='register__customer__img'>
              <Image src={register} fluid alt='register image' />
            </div>
          </Grid>

          {/* Right side with form components */}
          <Grid item xs={12} md={6}>
            {/* Form */}
            <div className='register__customer__form'>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    {/* Heading */}
                    <div className='register__customer__heading'>
                      <h2>Sign up</h2>
                    </div>
                  </Grid>
                  {/* First Name */}
                  <Grid item xs={12}>
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='First Name'
                      variant='outlined'
                      value={first_name}
                      onChange={(e) => {
                        setFname(e.target.value);
                      }}
                      size='small'
                      style={{ width: '80%' }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Last Name */}
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Last Name'
                      variant='outlined'
                      value={last_name}
                      onChange={(e) => {
                        setLname(e.target.value);
                      }}
                      required
                      size='small'
                      style={{ width: '80%' }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {/* Status */}
               
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Status'
                      variant='outlined'
                      value={status}
                      size='small'
                      style={{ width: '80%' }}
                      onChange={(e) => setStatus(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Email */}
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      value={email}
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
                      className='input-text'
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
                        
                      }}
                      required
                    />
                  </Grid>
                  {/* Birthday */}
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label='Birthday'
                        value={birthday}
                        size='small'
                        onChange={(e) => {
                          setBirthday(e);
                        }}
                        sx={{ width: '80%' }}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} style={{ width: '80%' }}>
                    {/* Signup Button */}
                    <div className='register__vehicle__submitbtn'>
                      <Button type='submit' variant='contained'>
                        Sign up
                      </Button>
                    </div>
                  </Grid>

                  <Grid item xs={12} style={{ width: '100%' }}>
                    {/* move to login */}
                    <div className='already__have__an__account'>
                      <p>
                        Already Have an Account <Link to='/login'>Login</Link>
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

export default Register;
