import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Forum from './components/forum/forum.jsx';
import './styles/app.css';

export const AppContext = React.createContext();

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <Forum />
    </>
  )
}

export default App
