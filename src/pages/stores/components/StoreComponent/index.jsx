import React from 'react';
import { ContainerComponent, StoreAddress, StoreImg } from './styled';
import Pizza from './../../../../assets/stores/trulli.png';

const StoreComponent = (props) => {
  const { name, address } = props;

  return (
    <ContainerComponent>
      <StoreImg src={Pizza} alt="imgStore" />
      <h5> {name} </h5>
      <StoreAddress> {address}</StoreAddress>
    </ContainerComponent>
  )
};

export default StoreComponent;