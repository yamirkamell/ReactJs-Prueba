import styled from 'styled-components';
import backgroundLogin from './../../../../assets/imagebkg.png';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

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
  width: 50%;
  height: 50%;
  padding: 0 25%;
  
`;
const ContainerRight = styled.div`
  flex: 2; 
  background-color: white; 
  height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  align-items: center;
  
`;
const BestPizzaIcon = styled.img`
  position: fixed;
  left: 70px;
  top: 20px;
  width: 100px;
  height: 80px;
  @media (max-width: 475px) {
    width: 0px;
    height: 0px;
  }
  
`;
const ContainerHeader = styled.div`
  width: 100%;  
  flex: 0.5;  
  display: flex; 
  flex-direction: row; 
  justify-content: flex-end;
  align-items: center;
`;
const ContainerLogOut = styled.div`
  margin: 0 15%; 
  display: flex; 
  align-items: center;
  &:hover {
    opacity: 0.5;
    cursor: pointer;    
    }

`;
const ContainerBody = styled.div`
  width: 100%; 
  flex: 4; 
  overflow-y: scroll;
`;
const ContainerStore = styled.div`
  margin: 0 5%;
`;
const ContainerStoreInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerStoreCard = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 2% 0;
`;
const ContainerComponent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 210px;
`;
const StoreImg = styled.img`
  width: 150px;
  height: 150px;
`;

const ContainerFooter = styled.div`
  background-color: #1f1f1f;
  width: 100%; 
  flex: 0.5; 
  display: flex; 
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
`;

const ContainerSocialsNetworks = styled.div`
  margin: 0 5%;
`;

const FacebookIcon = styled(AiFillFacebook)`
  width: 30px; 
  height: 30px; 
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;    
    } 
`;

const InstagramIcon = styled(AiOutlineInstagram)`
  width: 30px; 
  height: 30px; 
  color: white; 
  margin-left: 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;    
    }
`;
const IconFooter = styled.img`
  margin: 0 15%; 
  width: 45px; 
  height: 40px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;    
    }
`;


export {
  ContainerRoot,
  ContainerLeft,
  ImageLeft,
  ContainerRight,
  BestPizzaIcon,
  ContainerBody,
  ContainerHeader,
  ContainerLogOut,
  ContainerStore,
  ContainerStoreInfo,
  ContainerComponent,
  StoreImg,
  ContainerStoreCard,
  ContainerFooter,
  ContainerSocialsNetworks,
  FacebookIcon,
  InstagramIcon,
  IconFooter
};