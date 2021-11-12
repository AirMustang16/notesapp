import './SignInPage.css'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';


function SignInPage(){

    
    const history= useHistory()
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isLoading,setIsLoading]= useState(false);
    const [er, setError] = useState();

    async function signIn() {
        try {
            setIsLoading(true);
            const user = await Auth.signIn(username, password);
            setIsLoading(false);
            history.push("/Home")
        } catch (error) {
            setError(error.toString())
            console.log('error signing in', error);
        }
    }
 
      return (isLoading == false?
          <div className="login-wrapper1">
          <h1>Please Sign In</h1>
          <form >
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
            
              <button type="button" onClick= {signIn}>Sign In</button>
              <a href="/SignUp">Sign Up</a>
            </div>

            <strong>{er}</strong>
          </form>
        </div>:
        
        <div className="s">

        <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}/>
        </div>
      )

     
    }




export default SignInPage;