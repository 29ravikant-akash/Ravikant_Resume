import React from "react";
import Profile from "./components/Profile.jsx";
import { BrowserRouter } from 'react-router-dom';
import "./styles/App.css";


function App() {
  return (
    <BrowserRouter>
      <Profile />
      <div className="footer"> <h1>Thank you for visiting.</h1> </div>
    </BrowserRouter>
  );
}

export default App;
