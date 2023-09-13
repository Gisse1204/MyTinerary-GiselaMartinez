import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import countries from './../countries.js';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import GoogleLoginButton from './../components/GoogleLoginButton'
import jwtDecode from 'jwt-decode';
import { login } from '../actions/authActions';
import Swal from 'sweetalert2';
import Footer from './../components/Footer';
import { toast } from 'react-toastify';

const Signin = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    photourl: "",
  });

  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const { email, password } = data;
      const userData = { email, password };
      const res = await axios.post('http://localhost:1212/api/auth/in', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.data.error) {
        console.log('Error:', res.data.error);
        // Muestra SweetAlert2 si la contraseña es incorrecta
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The password or email is incorrect!',
        });
      } else {
        // Inicia sesión si la autenticación es exitosa
        console.log(res);
        dispatch(login(res.data));
        
      }
      toast.success('Login successful!', {
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  /* const handleSubmitGoogle = async () => {
    try {
      const { email, password } = data;
      const userData = { email, password };
      const res = await axios.post('http://localhost:1212/api/auth/in', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      dispatch(login(res.data))
    } catch (error) {
      console.error(error);
    }
  }; */
  
  useGoogleOneTapLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const infoUser = jwtDecode(credentialResponse.credential)
      const userData = {
        email: infoUser.email,
        password: "Mytinerary1234",
      }
      const res = await axios.post('http://localhost:1212/api/auth/in', userData);
      console.log(res);
      dispatch(login(res.data))
      toast.success('Login successful!', {
        autoClose: 3000,
      });
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    <div>
      <div className="signin-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', marginTop: '20px', borderRadius: '10px', padding: '20px'}}>
        <form className="form" onSubmit={(e) => e.preventDefault()} style={{display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#ffffff', padding: '30px', width: '450px', borderRadius: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'}}>
          <h2 className="text-red-400" style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center'}}>
            Sign In
          </h2>

          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm" style={{border: '1.5px solid #ecedec', borderRadius: '10px', height: '50px', display: 'flex', alignItems: 'center', paddingLeft: '10px', transition: '0.2s ease-in-out'}}>
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '0', left: '0', height: '50px', width: '50px', transition: 'all 0.3s', fill: '#666'}}>
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
                  fill="#000000"/></g>
            </svg>
            <input onChange={handleChangeData} value={data.email} type="text" name="email" className="input" placeholder="Enter your Email" style={{marginLeft: '10px', borderRadius: '10px', border: 'none', width: '85%', height: '100%'}}/>
          </div>

          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm" style={{border: '1.5px solid #ecedec', borderRadius: '10px', height: '50px', display: 'flex', alignItems: 'center', paddingLeft: '10px', transition: '0.2s ease-in-out'}}>
            <svg height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '0', left: '0', height: '50px', width: '50px', transition: 'all 0.3s', fill: '#666'}}>
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0-26.476562-21.546875-48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0-8.832031 7.1875 16 16 16h288c8.8125 0-16-7.167969-16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input onChange={handleChangeData} value={data.password} type="password" name="password" className="input" placeholder="Enter your Password" style={{marginLeft: '10px', borderRadius: '10px', border: 'none', width: '85%', height: '100%'}}/>
          </div>

          <div className="flex-row">
            <span className="span" style={{fontSize: '14px', marginLeft: '5px', color: '#2d79f3', fontWeight: '500', cursor: 'pointer' }}>
              Forgot password?
            </span>
          </div>

          <button className="button-submit" type="button" onClick={handleSubmit} style={{margin: '20px 0 10px 0', backgroundColor: '#151717', border: 'none', color: 'white', fontSize: '15px', fontWeight: '500', borderRadius: '10px', height: '50px', width: '100%', cursor: 'pointer'}}>
            Sign In
          </button>

          <p className="p" style={{textAlign: 'center', color: 'black', fontSize: '14px', margin: '5px 0'}}>
            Do not have an account?{' '}
            <Link to="/signup" className="span" style={{ fontSize: '14px', marginLeft: '5px', color: '#2d79f3', fontWeight: '500', cursor: 'pointer' }}>
              Sign Up
            </Link> </p>

          {/* <p className="p line">Or With</p>
          
          <GoogleLoginButton fn={handleSubmitGoogle} /> */}

        </form>
      </div>
      <div className='container mx-auto' style={{ lineHeight: '49px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Signin;
