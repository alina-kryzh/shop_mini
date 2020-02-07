import React from 'react';
import s from './App.module.css';
import {Route} from "react-router-dom";
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import PasswordRecover from './Components/PasswordRecovery/PasswordRecover'
import Header from './Components/Header/header';
import Profile from './Components/Profile/Profile';
import Modals from "./Components/Modals/Modals";
import Time from "./Components/Time/Time";
import Color from "./Components/Color/Color";
import Shop from "./Components/Shop/Shop";
import Basket from "./Components/Shop/Basket"


const App: React.FC = () => {
  return (
    <div >
      <Header/>
        <div className={s.app}>
            <Route render={() => <Login/>} path='/login'/>
            <Route render={() => <Registration/>} path='/registration'/>
            <Route render={() => <PasswordRecover/>} path='/password_recover'/>
            <Route render={() => <Profile/>} path='/profile'/>
            <Route render={() => <Modals />} path = '/modals'/>
            <Route render={() => <Time/>} path = '/time'/>
            <Route render={() => <Color />} path = '/color'/>
            <Route render={() => <Shop/>} path = '/shop'/>
            <Route render={() =>  <Basket/>} path = '/basket'/>
        </div>
    </div>
  );
}

export default App;