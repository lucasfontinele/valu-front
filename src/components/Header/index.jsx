import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="container">
      <h1>Valu</h1>
      <div className="user-content">
        <img src="https://avatars1.githubusercontent.com/u/38741718?s=460&v=4" alt="avatar"/>
        <p>Lucas Fontinele</p>
      </div>
    </div>
  )
}
