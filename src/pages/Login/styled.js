import styled from 'styled-components';
import backgroundLogin from './../../assets/imagebkg.png';

const ContainerRoot = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  align-items: center;
  background-image: url(${backgroundLogin});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const ContainerLeft = styled.div`
  flex:  1.5;
  @media (max-width: 475px) {
    flex: 0;
  }
  
`;
const ImageLeft = styled.img`
  width: 90%;
  height: 90%;
  padding: 5%;
  
`;
const ContainerRight = styled.div`
  flex: 2; 
  background-color: white; 
  height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-evenly; 
  align-items: center;
`;
const BestPizzaIcon = styled.img`
  width: 180px;
  height: 150px;
  
`;
const ContainerBody = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  
`;
const ContainerInput = styled.div`
  margin-top: 15px;
  
`;


export {
  ContainerRoot,
  ContainerLeft,
  ImageLeft,
  ContainerRight,
  BestPizzaIcon,
  ContainerBody,
  ContainerInput
  
};