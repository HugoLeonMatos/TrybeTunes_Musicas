import { Route, Routes } from 'react-router-dom';
import Login from './Componentes/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
    </Routes>
  );
}

export default App;
