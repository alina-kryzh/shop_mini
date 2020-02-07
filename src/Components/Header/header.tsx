import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "@material-ui/core";


const Header: React.FC = () => {
    let [showHeader, setShowHeader] = useState(false)

  return (
    <div className="App" style={{backgroundColor: '#31353d'}}>
        {showHeader?
        <div style = {{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
<Button variant="contained" color="primary" onClick = {() =>setShowHeader(false)}>Hide dev header</Button>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/login'>sign-in</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/registration'>register</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/password_recover'>forgot</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/profile'>neko</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/modals'>modals</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/time'>time</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/color'>color</NavLink>
<NavLink style = {{textDecoration : 'none', color: 'white'}} to='/shop'>shop</NavLink>

        </div>:<Button variant="contained" color="primary" onClick = {() =>setShowHeader(true)}>Show dev header</Button>
    }
    </div>
  );
};

export default Header;