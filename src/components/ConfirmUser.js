import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useHistory } from 'react-router';


function ConfirmUser(){

    const history= useHistory()
    const [username, setUserName] = useState();
    const [code, setCode] = useState();
    const [er, setError] = useState();

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(username, code)
          history.push('/SignInPage')
        } catch (error) {
            setError(error.toString())
            console.log('error confirming sign up', error);
        }
    }

    async function resendConfirmationCode() {
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }


    return(
        <div>
          <h1>Please enter code</h1>
          <form >
          
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Code</p>
              <input type="number" onChange={e => setCode(e.target.value)} />
            </label>
            <div>
              <button type="button" onClick= {confirmSignUp}>Submit</button>
              <button type="button" onClick= {resendConfirmationCode}>Resend</button>
            </div>
            <strong>{er}</strong>
          </form>
        </div>
    )

}

export default ConfirmUser