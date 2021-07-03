import React, { useEffect } from 'react';
import Home from './pages/home'
import ShopPage from './pages/shop';
import SignInAndSignUpPage from './pages/signInAndSignUpPage';
import NotFoundPage from './pages/404NotFound';
import Navbar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import {useAppSelector} from './redux/hook'
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils'
import { setCurrentUser } from './redux/user/userSlice';
import {useAppDispatch} from './redux/hook'


const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const {currentUser} = useAppSelector(state => state.user)
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
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/login">
          {currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage /> }
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
