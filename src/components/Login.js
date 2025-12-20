import { useState } from "react"
import Header from "./Header"


const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)





    function handleToggle (){
        setIsSignInForm(!isSignInForm)

    }



  return (
    <div><Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg" alt="Logo"/>
        


    </div>

    <form className="w-3/12 absolute  p-12 bg-black my-36  cursor-pointer mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1  className="font-bold text-3xl py-4"> {isSignInForm ? "Sign In" : "Sign Up "}</h1>
        
       { !isSignInForm && ( <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/> )}

        <input type="text" placeholder="Enter email address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg "> {isSignInForm ? "Sign In" : "Sign Up "}</button>
            <p className="py-4" onClick={handleToggle}> {isSignInForm ? " New to Netflix ? Sign Up Now" : "Already a user ! Sign In Now"} </p>


    </form>


    
    
    </div>
  )
}

export default Login