import styled from 'styled-components';

const ContainerComponent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const StoreAddress = styled.sub`
  margin-top: -15px;
  
`;

const StoreImg = styled.img`
  width: 150px;
  height: 150px;
  &:hover {
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 15px #f6c243;
    transform: rotate(360deg);
    transition: transform .5s;
    
    }
`;


export {
  ContainerComponent,
  StoreAddress,
  StoreImg
  
};