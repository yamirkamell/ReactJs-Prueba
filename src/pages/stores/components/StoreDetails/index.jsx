import React from 'react';
import {
  ContainerRoot,
  ContainerLeft,
  ImageLeft,
  ContainerRight,
  BestPizzaIcon,
  ContainerHeader,
  ContainerLogOut,
  ContainerBody,
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
} from './styled';
import BestPizzaStores from './../../../../assets/Logo.png';
import BestPizzaIconFooter from './../../../../assets/Best-Pizza.png';
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';
import pizzaExample from './../../../../assets/pizzaExample.png';


const StoreDetails = () => {
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <ContainerRoot>
      <ContainerLeft>
        <BestPizzaIcon src={BestPizzaStores} alt='PizzaStoresImg' />
        <ImageLeft src={location.state.img} alt='PizzaImg' />
      </ContainerLeft>
      <ContainerRight>
        <ContainerHeader>
          <ContainerLogOut onClick={() => { navigate(-1) }}>
            <BiArrowBack />
            <span> Regresar</span>
          </ContainerLogOut>
        </ContainerHeader>
        <ContainerBody>
          <ContainerStore>
            <ContainerStoreInfo>
              <h2> {location.state.item.name}</h2>
              <span> {location.state.item.address}</span>
              <sub> {location.state.item.description}</sub>
            </ContainerStoreInfo>
            <ContainerStoreCard>
              {location.state.item.products?.map((item) => (
                <ContainerComponent key={item.id}>
                  <StoreImg src={pizzaExample} alt='productImg' />
                  <span>{item.name} </span>
                </ContainerComponent>
              ))}
            </ContainerStoreCard>
          </ContainerStore>

        </ContainerBody>
        <ContainerFooter>
          <ContainerSocialsNetworks>
            <a href='https://www.facebook.com/robinfood.Col/' target="noreferrer">
              <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/robinfoodcol/' target="noreferrer">
              <InstagramIcon />
            </a>
          </ContainerSocialsNetworks>
          <IconFooter src={BestPizzaIconFooter} alt='bestPizza' onClick={() => { navigate('/login'); }} />
        </ContainerFooter>
      </ContainerRight>
    </ContainerRoot>
  )
};

export default StoreDetails;