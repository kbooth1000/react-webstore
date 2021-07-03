import React from 'react';
import {NavLink } from 'react-router-dom';

let Header = () => <header>
<div className="logo">
    <img src="img/logo.svg" alt="Webshop logo" />
</div>
<div className="cart-info">
    <p>Your Cart:
        <span className="items-in-cart">3</span>
        <span className="cost-in-cart">$221.00</span>
    </p>
</div>
<div className="user-profile">
    <p className="user-name">Kyle</p>
    <p className="user-login">logout</p>
</div>
<div>
<NavLink to='/'>Home</NavLink><br/>
<NavLink to='/product'>Product Page</NavLink>
</div>
</header>

export default Header;
