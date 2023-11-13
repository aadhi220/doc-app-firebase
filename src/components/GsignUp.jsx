import { useAuth } from "../contextApi/context";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SignIn() {
  const { googleSignUp } = useAuth();
  // console.log(googleSignUp)
  const navigate = useNavigate();
  const submitHandler = () => {
    googleSignUp()
      .then(() => {
        console.log("Success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Button onClick={submitHandler} variant="text" className="ring-1 shadow-lg flex place-items-center">
     <img className="w-[30px]" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /><span className="capitalize">Sign In with Google</span>
    </Button>
  );
}

export default SignIn;
