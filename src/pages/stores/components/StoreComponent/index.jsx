import React from 'react';
import { ContainerComponent, StoreAddress, StoreImg } from './styled';
import trulli from './../../../../assets/stores/trulli.png';
import camion from './../../../../assets/stores/pizzeria_camion.png';
import sbarro from './../../../../assets/stores/Sbarro.png';
import stroller from './../../../../assets/stores/stroller_pizza.png';
import voglia from './../../../../assets/stores/voglia_di_pizza.png';

import { useNavigate } from 'react-router-dom';

const StoreComponent = (props) => {
  const navigate = useNavigate();
  const { id, name, address } = props;

  const getImgById = {
    1: trulli,
    2: camion,
    3: sbarro,
    4: stroller,
    5: voglia,
  };

  return (
    <ContainerComponent onClick={() => { navigate('/storeDetails', { state: { item: props, img: getImgById[id] } }); }}>
      <StoreImg src={getImgById[id]} alt="imgStore" />
      <h5> {name} </h5>
      <StoreAddress> {address}</StoreAddress>
    </ContainerComponent>
  )
};

export default StoreComponent;