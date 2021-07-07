import React, { useEffect } from 'react';

import Home from './pages/home'
import ShopPage from './pages/shop';
import CheckoutPage from './pages/checkout';
import SignInAndSignUpPage from './pages/signInAndSignUpPage';
import NotFoundPage from './pages/404NotFound';

import Navbar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import {useAppSelector, useAppDispatch} from './redux/hook'
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { setCurrentUser, selectUser } from './redux/user/userSlice';

import './App.css';


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector(state => selectUser(state))


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
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/login">
          {currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> }
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
