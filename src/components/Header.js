
  import {  signOut } from "firebase/auth";


import { useNavigate } from "react-router-dom";


import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO,UserIcon } from "../utils/constants";




const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)

    
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


    

    

function handleSignOut (){
   


signOut(auth).then(() => {
    

    
  // Sign-out successful.
}).catch((error) => {

    console.error(error)
  // An error happened.
});
}







  return (
   
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center">
      
      {/* Netflix Logo */}
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {/* User section */}
      { user && <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Header;
