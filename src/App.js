import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp';
import ConfirmUser from'./components/ConfirmUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import awsmobile from './aws-exports';
import Amplify from '@aws-amplify/core';
import SignInPage from './components/SignInPage';

Amplify.configure(awsmobile)
function App() {
  return <Router>
  <Switch>
  <Route exact path='/Home'>
  <Home />
  </Route>
  <Route path='/SignUp'>
  <SignUp />
  </Route>
  <Route path ='/SignInPage'>
  <SignInPage/>
  </Route>
  <Route path='/ConfirmUser'>
  <ConfirmUser/>
  </Route>
  
  </Switch>
  </Router>
}

export default App;
