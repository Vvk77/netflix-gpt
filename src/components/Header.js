
  import {  signOut } from "firebase/auth";


import { useNavigate } from "react-router-dom";


import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO,SUPPORTED_LANG,UserIcon } from "../utils/constants";
import { toggleGPTSearch } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";
import { useRef } from "react";




const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const selectRef  = useRef(null)

    const user = useSelector((store) => store.user)
      const gptSearch  = useSelector((store) => store.gpt.showGptSearch)




      function handleChange (){
   
        dispatch(changeLanguage(selectRef.current.value))

      }


    
useEffect(() => {

const Unsuscribe = onAuthStateChanged(auth, (user) => {
  if (user) {

    const {uid,email,displayName} = user
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

    dispatch(addUser({uid: uid, email: email, displayName: displayName}))

    navigate("/browse")

    // ...
  } else {
    // User is signed out
    // ...
    dispatch(removeUser())
        navigate("/")
  }
});
 return () => Unsuscribe()

},[])


    
function handleGPTSearchClick (){
  dispatch(toggleGPTSearch())
 

}
    

function handleSignOut (){
   


signOut(auth).then(() => {
    

    
  // Sign-out successful.
}).catch((error) => {

    console.error(error)
  // An error happened.
});
}







  return (
   
<div className="fixed top-0 left-0 px-8 py-2 bg-gradient-to-b from-black z-50 w-full flex justify-between items-center">
      
      {/* Netflix Logo */}
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {/* User section */}
      { user && <div className="flex items-center gap-4">

        {gptSearch &&  <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleChange}  ref={selectRef} >
{
  SUPPORTED_LANG.map((lan) => <option key={lan.identifier} value={lan.identifier}> {lan.name} </option> )
}

        
        </select> }

       

<button  className= "bg-purple-500 py-2 px-4 mx-4 my-2 text-white rounded-lg"onClick={handleGPTSearchClick}> {gptSearch ? "HomePage" : "GPT Search"}</button>

        <img
          className="w-14 h-14 rounded-full cursor-pointer border border-red-600"
          src={UserIcon}
          alt="user icon"
        /> 

        <button onClick={handleSignOut}className="text-white border border-red-600 px-4 py-2 rounded-md hover:bg-red-600 transition">
          Sign Out
        </button>
      </div>
}
    </div>

  );
};

export default Header;




