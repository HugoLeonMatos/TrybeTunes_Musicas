import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createUser } from '../services/userAPI';
import LoadingMessage from './LoadingMessage';

// type LoginProps = {
//   history: {
//     push: (path: string) => void;
//   };
// };

function Login() {
  const [name, setName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();

  // const history = useHistory();

  const handleNameInputMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const inputMin = 3;
    setName(value);
    setIsButtonDisabled(value.length < inputMin);
  };

  const handleFormSubm = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);

    try {
      await createUser({ name });

      setLoad(false);
      navigate('/search');
      // history.push('/search');
    } catch (error) {
      console.error(error);
      setLoad(false);
    }
  };

  return (
    load ? (
      <LoadingMessage />
    ) : (
      <div data-testid="page-login">
        <h1>login</h1>
        <form action="" onSubmit={ handleFormSubm }>
          <label htmlFor="name">
            <input
              type="text"
              data-testid="login-name-input"
              id="name"
              value={ name }
              onChange={ handleNameInputMin }
            />
          </label>

          <button
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ handleFormSubm }
          >
            botão de entrar
          </button>
        </form>
      </div>
    )
  );
}

export default Login;
