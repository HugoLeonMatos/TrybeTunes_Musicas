import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login';
import Search from './Componentes/Search';
// import Album from './Componentes/Album'; // Importe o componente Album

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      {/* <Route path="/album/:id" element={ <Album /> } /> */}
      {' '}
      {/* Nova rota para o componente Album */}
    </Routes>
  );
}

export default App;
