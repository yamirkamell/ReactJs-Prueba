import React from 'react';
import { Button, ContainerComponent, } from './styled';

const ButtonComponent = (props) => {

  return (
    <ContainerComponent>
      <Button> {props.title} </Button>
    </ContainerComponent>
  )
};

export default ButtonComponent;