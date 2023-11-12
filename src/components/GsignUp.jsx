// import { Button } from 'bootstrap'
import React from "react";

import { useAuth } from '../contextApi/context'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SignIn() {
    const { googleSignUp } = useAuth();
    // console.log(googleSignUp)
    const navigate = useNavigate();
    const submitHandler = () => {
      googleSignUp()
      .then(() => {
        console.log("Success")
        navigate("/")
      })
      .catch((error)=>{
        console.log(error.message);
      })
    }
  return (
   <Button onClick={submitHandler} variant="outlined">Login with Google</Button>
   
  );
}

export default SignIn;