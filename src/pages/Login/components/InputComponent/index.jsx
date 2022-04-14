import React from 'react';
import { ContainerComponent, Input, Icon } from './styled';

const InputComponent = (props) => {
  const { placeholder, type, img, name, setName } = props;

  return (
    <ContainerComponent>
      <Input placeholder={placeholder} type={type} value={name} onChange={event => setName(event.target.value)} />
      <Icon src={img} />
    </ContainerComponent>
  )
};

export default InputComponent;