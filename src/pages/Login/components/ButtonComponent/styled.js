import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: -5px;
`;

const Button = styled.button`
  width: 20vw;
  height: 50px;
  border-width: 0px;
  background-color: #F9C444;
  border-radius: 5px;  
  @media (max-width: 475px) {
    width: 70vw;
  }
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    }

`;

export {
  ContainerComponent,
  Button  
};