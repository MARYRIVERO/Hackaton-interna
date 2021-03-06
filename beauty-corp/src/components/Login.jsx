import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logIn } from '../controller/firebase-login';
import facebook from '../img/facebook2.svg';
import google from '../img/google.svg';

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
    <main>
      <form onSubmit={handleSubmit} className="login-container">
        <h3>Inicia sesión</h3>
        <div className="form-group">
          <label for="exampleInputEmail1">Correo electrónico</label>
          <input
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Escribe tu correo"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <p><a href="/#">¿Olvidaste tu contraseña?</a></p>
        <button type="submit" className="btn btn-login font" onClick={handleSubmit}>Iniciar sesión</button>
        <p className="text-center">ó</p>
        <button type="button" class="btn btn-google font"><img className="icon" src={google} alt="google"/><span>Ingresa con Google</span></button>
        <button type="button" class="btn btn-fb font"><img className="icon" src={facebook} alt="facebook"/><span>Ingresa con Facebook</span></button>
        <p className="text-center">¿Aún no tienes cuenta? <Link to="/Register">Regístrate</Link></p>
      </form>
    </main>
  )
};

export default Login;