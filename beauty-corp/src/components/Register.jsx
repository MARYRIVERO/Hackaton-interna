import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../controller/firebase-login';
import facebook from '../img/facebook2.svg';
import google from '../img/google.svg';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password).then((res) => console.log('Successful Sign In')).catch((error) => console.log(error.message));
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
        <h3>Regístrate</h3>
        <button type="button" class="btn btn-google font"><img className="icon" src={google} alt="google"/><span>Regístrate con Google</span></button>
        <button type="button" class="btn btn-fb font"><img className="icon" src={facebook} alt="facebook"/><span>Regístrate con Facebook</span></button>
        <p className="text-center">o regístrate con tu correo</p>
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
        <button type="submit" className="btn btn-login font" onClick={handleSubmit}>Continuar</button>
        <p className="text-center">¿Ya tienes cuenta? <Link to="/Login">Ingresa</Link></p>
      </form>
    </main>
  )
};

export default Register;