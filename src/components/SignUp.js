import { ConsoleLogger } from "@aws-amplify/core";
import { useState } from "react";
import './SignUp.css'
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router";
import Loader from "react-loader-spinner";
import './Loader.css';



function SignUp(){

    const history= useHistory()
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isLoading,setIsLoading]= useState(false);
    const [email, setEmail] = useState();
    const [er,setError] = useState();

    async function signUp() {
        try {
          
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                    
                }
                
            });
            setIsLoading(true)
            history.push('/ConfirmUser')
        } catch (error) {
          setError(error.toString())
            console.log('error signing up:', error);
        }
    }

    return ( isLoading==false?
        <div className="login-wrapper">
          <h1>Please Sign up</h1>
          <form >
          <label>
              <p>Email</p>
              <input type="email" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
            
              <button type="button" onClick= {signUp}>Submit</button>
              <a href="/SigninPage">Already a member?</a>
            </div>
            <strong>{er}</strong>
          </form>
        </div>:
        
        <div>
        
        <Loader 
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        
      />
        </div>
      )
}

export default SignUp