import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: -5px;
`;

const Button = styled.button`
  width: ${window.innerWidth >= 475 ? '20vw' : '70vw'};
  height: 50px;
  border-width: 0px;
  background-color: #F9C444;
  border-radius: 5px;  
`;

export {
  ContainerComponent,
  Button  
};