import React from 'react';
import { ContainerComponent, Input, Icon } from './styled';

const InputComponent = (props) => {


  return (
    <ContainerComponent>
      <Input placeholder={props.placeholder} type={props.type} />
      <Icon src={props.img} />
    </ContainerComponent>
  )
};

export default InputComponent;