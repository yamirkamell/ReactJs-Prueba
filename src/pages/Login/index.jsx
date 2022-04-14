import React from 'react';
import { ContainerRoot, ContainerLeft, ImageLeft, ContainerRight, BestPizzaIcon, ContainerBody, ContainerInput } from './styled';
import Pizza from './../../assets/Pizza.png'
import BestPizzaLogin from './../../assets/login/Login-Best-Pizza.png'
import UserLogin from './../../assets/login/ic_user.png'
import PasswordLogin from './../../assets/login/ic_pass.png'
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';


const Login = () => {

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
            <InputComponent placeholder='Usuario' type='text' img={UserLogin} />
            <InputComponent placeholder='Contraseña' type='password' img={PasswordLogin} />
          </ContainerInput>
          <h5> ¿Olvidaste tu contraseña?</h5>
        </ContainerBody>
        <ButtonComponent title='Iniciar sesión ' />
      </ContainerRight>
    </ContainerRoot>
  )
};

export default Login;