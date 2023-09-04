import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login';
import Search from './Componentes/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />

    </Routes>
  );
}
export default App;
