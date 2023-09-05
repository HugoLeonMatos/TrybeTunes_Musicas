import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login';
import Search from './Componentes/Search';
import Album from './Componentes/Album';
import Layout from './Componentes/Layout';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={ <Login /> } />
//       <Route path="/search" element={ <Search /> } />
//       <Route path="/album/:id" element={ <Album /> } />

//     </Routes>
//   );
// }

// export default App;

// App.tsx

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        {/* <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } /> */}
        <Route path="/album/:id" element={ <Album /> } />
        {' '}
        {/* Adicione esta rota */}
      </Route>
    </Routes>

  );
}

export default App;
