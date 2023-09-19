import React, { useContext, useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import UserContext from "../utils/useContext";
const Title = () => (
  <a href="./">
    <img
      className="h-20"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5Ka0-XNdYuTzCUkpWsZMRodmZ04zGoTrgULI3FA&s"
      alt=""
    />
  </a>
);
export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
const {user} = useContext(UserContext);


  return (
    <div className="flex justify-between p-3 bg-blue-50 shadow-lg ml-3 mr-3" >
      <Title />
      <div className="nav-items justify-between py-3 ">
        <ul className="flex">
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>

          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/contacts">Contact us</Link>
          </li>
          <li className="p-2">
            <Link to="/">Cart</Link>
          </li>
          <li className="p-2">
            <Link to="/instamart">Instamart</Link>
          </li>

        </ul>
      </div>
      <span className="mt-7 font-bold text-red-800">{user.name}</span>
      <span className="mt-7 font-bold text-red-800">{user.email}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
}
