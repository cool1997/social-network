import React, {lazy} from 'react'
import styles from './App.module.scss'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {withSuspense} from '../../hoc/withSuspense'
import {Provider} from 'react-redux'
import store from '../../redux/store'

import Logo from '../Logo/Logo-container'
import UserNav from '../UserNav/UserNav-container'
import SiteNav from '../SiteNav/SiteNav-container'
import Login from '../Login/Login-container'

const Profile = lazy(() => import('../Profile/Profile-container'))
const Dialogs = lazy(() => import('../Dialogs/Dialogs-container'))
const Users = lazy(() => import('../Users/Users-container'))


const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={`${styles.App}`} id='App' >

          <header className={styles.header}>
            <Logo />
            <UserNav className={styles.userNav}/>
          </header>

          <div className={styles.content}>
            <nav className={styles.nav}>
              <SiteNav />
            </nav>

            <main className={styles.main}>

              <Switch>  
                <Route path='/Profile/:userId?' render={withSuspense(Profile, props.store)}/>
                <Route path='/Dialogs' render={withSuspense(Dialogs, props.store)}/>
                <Route path='/Users' render={withSuspense(Users)}/>
                <Route path='/login' render={() => <Login />} />
                <Route exact path='/' render={withSuspense(Profile, props.store)}/>
                <Route render={() => <h1>404</h1>}/>
              </Switch>
              
            </main>
          </div>

          <footer className={styles.footer}>

          </footer>
        </div>
      </Provider>
    </BrowserRouter>
  );
}


export default App;
