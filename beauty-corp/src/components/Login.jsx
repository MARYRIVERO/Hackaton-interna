import React, { useState } from 'react';
import { logIn } from '../controller/firebase-login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password).then((res) => console.log('Successful Log In')).catch((error) => console.log(error.message));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Ingrese E-mail"
        onChange={handleEmail}
      />
      <input
        type="password"
        value={password}
        placeholder="Ingrese Contraseña"
        onChange={handlePassword}
      />
      <button type="submit" onClick={handleSubmit}>
        Iniciar sesión
    </button>
    </form>
)};

export default Login;