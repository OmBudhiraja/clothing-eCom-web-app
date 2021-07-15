import React, { useEffect } from 'react';

import Home from './pages/home'
import ShopPage from './pages/shop';
import CheckoutPage from './pages/checkout';
import SignInAndSignUpPage from './pages/signInAndSignUpPage';
import NotFoundPage from './pages/404NotFound';

import Navbar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import {useAppDispatch, useAppSelector} from './redux/hook'
import { checkUserSession, selectUser } from './redux/user/userSlice';

import { GlobalStyle } from './globalStyles'

const App: React.FC = () => {
  const currentUser = useAppSelector(state => selectUser(state))
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div>
      <GlobalStyle />
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
