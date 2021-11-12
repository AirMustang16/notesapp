import Auth from "@aws-amplify/auth"
import { useState,useEffect } from "react"
import { useHistory } from "react-router"
import { slide as Menu } from 'react-burger-menu'
import './BurgerMenu.css'

function Home(){

    const history=useHistory()
    const [user, setUser]=useState({})
    
    useEffect(async ()=>{
        try{
            const user = await Auth.currentAuthenticatedUser()
        setUser(user)
        }
        catch(error) {
            console.log('error signing in', error)
        }
        
    },[])

    async function signOut() {
        try {
            await Auth.signOut();
            history.push('/SignInPage')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }



    return (<div>
            <h1>
            Welcome {user.username}
            </h1>
            <button onClick={signOut}>Sign Out</button>
            <div>
            <Menu className= "burgerMenu">

            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        
            </Menu>
            </div>
            </div>
            
            
            
            )
            
}

export default Home