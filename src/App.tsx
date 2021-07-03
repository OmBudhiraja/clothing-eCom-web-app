import React, { useEffect, useState } from 'react';
import Home from './pages/home'
import ShopPage from './pages/shop';
import SignInAndSignUpPage from './pages/signInAndSignUpPage';
import NotFoundPage from './pages/404NotFound';
import Navbar from './components/navbar';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { setCurrentUser } from './redux/user/userSlice';
import {useAppDispatch} from './redux/hook'


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  // const [currentUser, setCurrentUser] = useState<any | null>(null)
  useEffect(() => {
    const authUnsub = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef?.onSnapshot(snap =>{
          dispatch(setCurrentUser({
            id: snap.id,
            ...snap.data()
          }))
        })
      }else{
        dispatch(setCurrentUser(null))
      }
    })
    return () => {
      authUnsub()
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/login">
          <SignInAndSignUpPage />
        </Route>
        <Route exact path="/signin">
          <SignInAndSignUpPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
