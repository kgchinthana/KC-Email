import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import '../../../styles/messageSystem.css';
import mail from '../../../components/images/mail.jpg';
import swal from 'sweetalert';

import { GoogleLogin } from 'react-google-login';
import {
  TextField,
  Grid,
  Box,
  Container,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  InputAdornment,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';

const clientId =
  '790433585929-p9slfbpl44uau7urp5tu91b5h5trl21j.apps.googleusercontent.com';

const MessageService = () => {
  const [from_email, setFromEmail] = useState('');
  const [to_email, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [textInputErrorMessageEmail, setTextInputErrorMessageEmail] =
    useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/sendmessage",
        {
          from_email,
          to_email,
          subject,
          text,
        }
      );
      console.log(response.data, "Login Success");
      if (response.data) {
        swal('Message is Sent', '', 'success'); // Show success message
        localStorage.setItem("token", response.data.token);
        setFromEmail("");
        setToEmail("");
        setSubject("");
        setText("");
        window.location.reload();
      }
    } catch (error) {
      swal("Message is missed!", "", "error"); // Show success message
      setFromEmail("");
        setToEmail("");
        setSubject("");
        setText("");
    }
  };

  const handleFromEmailChange = (e) => {
    const inputValue = e.target.value;

    // Regular expression to allow integers, alphabets and special characters
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    // Check if the input matches the pattern or is empty
    if (emailRegex.test(inputValue) || inputValue !== ' ') {
      setFromEmail(inputValue);
    } else {
      setTextInputErrorMessageEmail('*Please enter a valid email address');
    }
  };
  const handleToEmailChange = (e) => {
    const inputValue = e.target.value;

    // Regular expression to allow integers, alphabets and special characters
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    // Check if the input matches the pattern or is empty
    if (emailRegex.test(inputValue) || inputValue !== ' ') {
      setToEmail(inputValue);
    } else {
      setTextInputErrorMessageEmail('*Please enter a valid email address');
    }
  };
  return (
    <>
      <Topbar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Container>
            <div className='mail__container '>
              <Grid container spacing={2}>
                {/* Left side with register customer image */}

                <Grid item xs={12} md={6}>
                  <Box>
                    <div className='mail__img'>
                      <img src={mail} alt='mail' />
                    </div>
                  </Box>
                </Grid>

                {/* Right side with form components */}
                <Grid item xs={12} md={6}>
                  {/* Form */}
                  <div className='mail__form'>
                    <form onSubmit={handleLogin}>
                      <Grid item xs={12}>
                        {/* Heading */}
                        <div className='mail__heading'>
                          <h2>New Message</h2>
                        </div>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          {/* From */}
                          <TextField
                            className='input-text-login'
                            id='outlined-basic'
                            label='From'
                            variant='outlined'
                            value={from_email}
                            type='text'
                            helperText={textInputErrorMessageEmail}
                            onChange={handleFromEmailChange}
                            size='small'
                            style={{ width: '80%' }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* From */}
                          <TextField
                            className='input-text-login'
                            id='outlined-basic'
                            label='To'
                            variant='outlined'
                            value={to_email}
                            type='text'
                            helperText={textInputErrorMessageEmail}
                            onChange={handleToEmailChange}
                            size='small'
                            style={{ width: '80%' }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* From */}
                          <TextField
                            className='input-text-login'
                            id='outlined-basic'
                            label='Subject'
                            variant='outlined'
                            value={subject}
                            type='text'
                            onChange={(e) => setSubject(e.target.value)}
                            size='small'
                            style={{ width: '80%' }}
                            required
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* Message */}
                          <TextField
                            id='outlined-textarea'
                            label='Messsage *'
                            multiline
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            size='small'
                            style={{ width: '80%' }}
                          />
                        </Grid>
                        <Grid item xs={12} style={{ width: '70%' }}>
                          {/* Signup Button */}
                          <div className='mail__submitbtn'>
                            <Button type='submit' variant='contained'>
                              Send
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default MessageService;
