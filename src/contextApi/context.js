import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  //authentication
  const signIn = (e) => {
    e.preventDefault();
    if(email==="" || password==="") {
     

    }else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/home')
      })
      .catch((error) => {
        console.log(error);
        alert("incorrect cretentials")
      });
    }
  };
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update display name (username) for the user
        updateProfile(userCredential.user, {
          displayName: username,
        })
          .then(() => {
            console.log("User profile updated successfully");
            setEmail("")
            setPassword("")
            navigate('/');

          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
          });

        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(authUser);

  //authentication end

  return (
    <AppContext.Provider
      value={{
        authUser,
        showPassword,
        setShowPassword,
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        signIn,
        userSignOut,
        signUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export  const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
