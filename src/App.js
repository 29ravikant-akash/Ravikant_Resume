import React from "react";
import Profile from "./components/Profile.jsx";
import { BrowserRouter } from 'react-router-dom';
import "./styles/App.css";


function App() {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
}

export default App;
