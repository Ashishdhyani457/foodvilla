import React, { useState } from "react";
import "../header.css";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="./">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5Ka0-XNdYuTzCUkpWsZMRodmZ04zGoTrgULI3FA&s"
      alt=""
    />
  </a>
);
export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <li>
          <Link to="/">
          Home
          </Link></li>

         <li> <Link to="/about">
         About
          </Link></li>
          <li>
<Link to="/contacts">
Contact us
</Link>
</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
}
