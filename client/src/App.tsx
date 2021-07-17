import React, { useEffect, lazy, Suspense } from 'react';

import Navbar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom'
import {useAppDispatch, useAppSelector} from './redux/hook'
import { checkUserSession, selectUser } from './redux/user/userSlice';

import { GlobalStyle } from './globalStyles'
import Spinner from './components/spinner';
import ErrorBoundary from './components/error-boundary';

const Home = lazy(() => import('./pages/home'))
const ShopPage = lazy(() => import('./pages/shop'))
const CheckoutPage = lazy(() => import('./pages/checkout'))
const SignInAndSignUpPage = lazy(() => import('./pages/signInAndSignUpPage'))
const NotFoundPage = lazy(() =>import('./pages/404NotFound'))


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
      <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App;
