import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './Components/Main';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/:id" element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
