import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utils/validate"

import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";



const Login = () => {


    const dispatch = useDispatch()



 

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMsg,setErrorMsg] = useState(null)

    const email = useRef(null)
        const password = useRef(null)
        const name = useRef(null)


function handleButonClick (){



    console.log(email.current.value)
    console.log(password.current.value)


       const message =  checkValidData(email.current.value, password.current.value )
       console.log(message)
       setErrorMsg(message)


if(message) return 


if(!isSignInForm) {

    
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

updateProfile(user, {
  displayName: name.current.value,
}).then(() => {
  // Profile updated!
  // ...
  
      const {uid,email,displayName} = auth.currentUser
  
  
      dispatch(addUser({uid: uid, email: email, displayName: displayName}))
}).catch((error) => {
  // An error occurred
  // ..
  setErrorMsg(error.message)
});


    console.log(user)
     
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + errorMessage)
   

    // ..
  });




}else {



signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log(user)
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        setErrorMsg(errorCode + errorMessage)
       
  });


}











}


    function handleToggle (){
        setIsSignInForm(!isSignInForm)

    }



  return (
    <div><Header/>
    <div className="absolute">
        <img src={BG_IMG}/>


    </div>

    <form  onSubmit={(e) => e.preventDefault()}className="w-3/12 absolute  p-12 bg-black my-36  cursor-pointer mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1  className="font-bold text-3xl py-4"> {isSignInForm ? "Sign In" : "Sign Up "}</h1>
        
       { !isSignInForm && ( <input  ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/> )}

        <input  ref={email} type="text" placeholder="Enter email address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="password"    className="p-4 my-4 w-full bg-gray-700" />
        <p className="text-red-600 font-bold">  {errorMsg}</p>
        <button  onClick={handleButonClick} className="p-4 my-6 w-full bg-red-700 rounded-lg "> {isSignInForm ? "Sign In" : "Sign Up "}</button>


            <p className="py-4" onClick={handleToggle}> {isSignInForm ? " New to Netflix ? Sign Up Now" : "Already a user ! Sign In Now"} </p>


    </form>


    
    
    </div>
  )
}

export default Login