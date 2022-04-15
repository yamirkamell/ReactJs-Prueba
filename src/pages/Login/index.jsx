import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiFillExclamationCircle } from "react-icons/ai";
import { ContainerRoot, ContainerLeft, ImageLeft, ContainerRight, BestPizzaIcon, ContainerBody, ContainerInput, ErrorText } from './styled';
import Pizza from './../../assets/Pizza.png'
import BestPizzaLogin from './../../assets/login/Login-Best-Pizza.png'
import UserLogin from './../../assets/login/ic_user.png'
import PasswordLogin from './../../assets/login/ic_pass.png'
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorAlert, setErrorAlert] = useState(false);

  const LogIn = async () => {
    await axios.get('https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json')
      .then(data => {
        data.data.response.users.forEach(user => {
          if (user.email === username && user.password === password) {
            return navigate('/stores');
          }
          else {
            setErrorAlert(true);
          }
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <ContainerRoot>
      <ContainerLeft>
        <ImageLeft src={Pizza} alt='PizzaImg' />
      </ContainerLeft>
      <ContainerRight>
        <BestPizzaIcon src={BestPizzaLogin} alt='PizzaLoginImg' />
        <ContainerBody>
          <h1> Bienvenido</h1>
          <span> A las mejores pizzas del país</span>
          <ContainerInput>
            <InputComponent placeholder='Usuario' type='text' img={UserLogin} name={username} setName={setUsername} />
            <InputComponent placeholder='Contraseña' type='password' img={PasswordLogin} name={password} setName={setPassword} />
          </ContainerInput>
          {errorAlert !== false ? <ErrorText>Usuario o Contraseña invalida <AiFillExclamationCircle /> </ErrorText>
            : null}
          <h5> ¿Olvidaste tu contraseña?</h5>
        </ContainerBody>
        <ButtonComponent title='Iniciar sesión ' press={LogIn} />
      </ContainerRight>
    </ContainerRoot>
  )
};

export default Login;