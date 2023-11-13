import React, { useContext, useEffect, useState, useCallback } from "react";

import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, deleteDoc, serverTimestamp} from "firebase/firestore";
import { getDocs,orderBy, query,doc} from "firebase/firestore";
import { db } from "../firebase";
const AppContext = React.createContext();
const provider = new GoogleAuthProvider();

export function useAuth() {
  // console.log(useContext(AuthContext))

  return useContext(AppContext);
}
const AppProvider = ({ children }) => {

  const [authUser, setAuthUser] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  // const [docTitle,setDocTitle]=useState("")
  const [docData, setDocData] = useState({});
  const navigate = useNavigate();
  //authentication
  const signIn = async (e) => {
setLoading(true)
    e.preventDefault();
    if (email === "" || password === "") {
      setLoading(false)
      //plz fill 
    } else {
     await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);

          navigate("/");
          setLoading(false)
        })
        .catch((error) => {
          console.log(error);
          alert("incorrect cretentials");
          setLoading(false)
        });
    }
  };
  const signUp =async (e) => {
    setLoading(true)
    e.preventDefault();
    if(email==="" || password ==="" || username==="") {
      setLoading(false)
    }else {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update display name (username) for the user
        updateProfile(userCredential.user, {
          displayName: username,
        })
          .then(() => {
            console.log("User profile updated successfully");
            setEmail("");
            setPassword("");
            navigate("/");
            setLoading(false)
          })
          .catch((error) => {
            console.log("Error updating user profile:", error);
            alert("error updating name")
            setLoading(false)

          });

        // console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
    }
  };
  const googleSignUp =async () => {
    setLoading(true)
    setLoading(false)
    return signInWithPopup(auth,provider);
    
  }


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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  //authentication end

  //quill



  //quill end

  //new doc

  // console.log("oyi ",authUser);




  const createHandler = async () => {
    
  const colRef = collection(db, "UserDocData", authUser.uid, "docs");
    const querySnapShot = await addDoc(colRef, {
      title: "Untitled",
      content: "",
      createdOn: serverTimestamp(),
    });
    
    navigate(`/edit/${querySnapShot.id}`);
  };

  //docheader
  const HandleSave =()=> {
    navigate('/')
  }



  const [userDocs, setUserDocs] = useState();
  const getUserDocs = async () => {
    const docCollectionRef = query(collection(db,"UserDocData",authUser.uid,'docs'))
const querySnapShot = await getDocs(
docCollectionRef
);
const udocs = querySnapShot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
}));
// console.log(udocs);
setUserDocs(udocs);
// console.log("userdoc",udocs);
};

const handleDelete = async (docId) => {
  // Display a confirmation dialog
  const userConfirmed = window.confirm('Are you sure you want to delete this document?');

  if (userConfirmed) {
    try {
      // Delete the document
      await deleteDoc(doc(db, "UserDocData", authUser.uid, "docs", docId));

      // Refresh the user's documents after deletion
      getUserDocs();
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  }
};

  return (
    <AppContext.Provider
      value={{
        //auth
        authUser,
        googleSignUp,
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
        loading,setLoading,

        //auth end
        //quill
   
        // setDocTitle,
        // docTitle,
        createHandler,
        HandleSave,
        userDocs,
        getUserDocs,
        docData,
        setDocData,
        handleDelete

        



      }}
    >
      { children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
