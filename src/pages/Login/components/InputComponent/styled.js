import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;  
`;

const Input = styled.input`
  width:  20vw;
  height: 50px;
  border-width: 0.1px;
  border-color: #CDCDCD;
  border-radius: 5px;
  @media (max-width: 475px) {
    width: 70vw;
  }
  
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