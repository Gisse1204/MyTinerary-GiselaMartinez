import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const GoogleLoginButton = ({ fn }) => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      try {
        const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          
          headers: {
            Authorization: "Bearer " + tokenResponse.access_token
          }
        });console.log("Response from Google API:", data),

        fn({
          firstname: data.given_name,
          lastname: data.family_name,
          email: data.email,
          password: "Mytinerary1234",
          photourl: data.picture,
        });

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div onClick={() => login()} className="flex-row">
            <button className="btn google" type="submit" style={{ marginTop: '10px', width: '100%', height: '50px', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '500', gap: '10px', border: '1px solid #ededef', backgroundColor: 'white', cursor: 'pointer', transition: '0.2s ease-in-out' }}>
              <svg version="1.1" width="20" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                <path fill="#FBBB00" d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
                <path fill="#518EF8" d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
                <path fill="#28B446" d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
                <path fill="#F14336" d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0C318.115,0,375.068,22.126,419.404,58.936z"></path>
              </svg>
              Google
            </button>
          </div>
  )
}

export default GoogleLoginButton