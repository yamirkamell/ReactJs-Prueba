import styled from 'styled-components';
import backgroundLogin from './../../assets/imagebkg.png';
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";



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
const ContainerSearch = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: flex-end; 
  align-items: center; 
  margin: 2% 10%; 
`;
const InputComponent = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 20px;
  border-width: 0.2px;
  border-color: #f6c243;
`;
const SearchIcon = styled(BiSearchAlt)`
  margin-left: -25px;
`;
const ContainerStoreCard = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  padding: 2% 0;
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
  ContainerSearch,
  InputComponent,
  SearchIcon,
  ContainerStoreCard,
  ContainerFooter,
  ContainerSocialsNetworks,
  FacebookIcon,
  InstagramIcon,
  IconFooter
};