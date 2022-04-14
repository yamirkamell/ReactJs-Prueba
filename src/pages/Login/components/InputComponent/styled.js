import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;  
`;

const Input = styled.input`
  width:  ${window.innerWidth >= 475 ? '20vw' : '70vw'};
  height: 50px;
  border-width: 0.1px;
  border-color: #CDCDCD;
  border-radius: 5px;
  
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -30px;
`;


export {
  ContainerComponent,
  Input,
  Icon
  
};