import React from "react";
import Paper from "@mui/material/Paper";
import { TextField, FormControlLabel, Checkbox, Button } from "@mui/material";
import "./Auth.min.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../contextApi/context";
export default function Auth({ register }) {
  const {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    email,
    setEmail,
    signIn,
    signUp,
  } = useGlobalContext();
  return (
    <>
      <div className="h-[100vh] w-full place-content-center place-items-center flex">
        <Paper
          className="w-[100%]  sm:w-[400px] h-[80%] p-[1rem]"
          elevation={9}
        >
          <div className="flex flex-col place-items-center place-content-center mb-11">
            <div className="flex place-content-center place-items-center  text-blue-700 rounded-[180px]  p-[1rem] w-[100px] h-[100px]">
              <i class="fa-solid fa-lock text-[4rem]"></i>
            </div>

            <h1 className="text-3xl">{register ? "Sign Up" : "Sign in"}</h1>
          </div>
          <form className="w-full h-full flex flex-col " action="">
            <div className="flex flex-col gap-[1rem]">
              {register && (
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              )}

              <TextField
                id="outlined-basic"
                type="email"
                label="Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <TextField
                id="outlined-basic"
                label="Password"
                type={showPassword ? "text" : "password"}
                show={true}
                variant="outlined"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    onChange={() => setShowPassword(!showPassword)}
                  />
                }
                label="Show Password"
              />

              {register ? (
                <Button onClick={(e) => signUp(e)} variant="contained">
                  Sign up
                </Button>
              ) : (
                <Button onClick={(e) => signIn(e)} variant="contained">
                  Sign in
                </Button>
              )}
            </div>

            {!register ? (
              <p className="text-right mt-2">
                Don't have an account?{" "}
                <Link to={"/register"} className="text-[blue]">
                  Sign Up
                </Link>
              </p>
            ) : (
              <p className="text-right mt-2">
                Already have an account?{" "}
                <Link to={"/"} className="text-[blue]">
                  Sign in
                </Link>
              </p>
            )}
          </form>
        </Paper>
      </div>
    </>
  );
}
