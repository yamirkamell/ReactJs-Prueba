import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  ContainerRoot,
  ContainerLeft,
  ImageLeft,
  ContainerRight,
  BestPizzaIcon,
  ContainerHeader,
  ContainerLogOut,
  ContainerBody,
  ContainerStore,
  ContainerSearch,
  InputComponent,
  SearchIcon,
  ContainerStoreCard,
  ContainerFooter,
  ContainerSocialsNetworks,
  FacebookIcon,
  InstagramIcon,
  IconFooter
} from './styled';
import Pizza from './../../assets/Pizza.png';
import BestPizzaStores from './../../assets/Logo.png';
import BestPizzaIconFooter from './../../assets/Best-Pizza.png';
import { BiLock } from "react-icons/bi";
import StoreComponent from './components/StoreComponent';


const Stores = () => {
  const navigate = useNavigate();
  const [storesInfo, setStoresInfo] = useState([]);
  const [tableStores, setTableStores] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetStores();
  }, []);

  const GetStores = async () => {
    await axios.get('https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json')
      .then(data => {
        setStoresInfo(data.data.response.stores);
        setTableStores(data.data.response.stores);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    filterItem(e.target.value);
  }

  const filterItem = (itemSearch) => {
    const resultSearch = tableStores.filter((item) => {
      if (item.name.toString().toLowerCase().includes(itemSearch.toLowerCase())) {
        return item;
      }
      else {
        return false;
      }
    });
    setStoresInfo(resultSearch);

  }

  return (
    <ContainerRoot>
      <ContainerLeft>
        <BestPizzaIcon src={BestPizzaStores} alt='PizzaStoresImg' />
        <ImageLeft src={Pizza} alt='PizzaImg' />
      </ContainerLeft>
      <ContainerRight>
        <ContainerHeader>
          <ContainerLogOut onClick={() => { navigate('/login'); }}>
            <BiLock />
            <span> Salir</span>
          </ContainerLogOut>
        </ContainerHeader>
        <ContainerBody>
          <ContainerStore>
            <ContainerSearch>
              <InputComponent
                value={search}
                placeholder="Búsqueda por nombre de la tienda"
                onChange={handleChange}
              />
              <SearchIcon />
            </ContainerSearch>
            <span> Pizzerías</span>
            <hr align='left' style={{ width: 65, borderTop: '1px solid #f6c243', marginTop: -1 }} />
            <div>
              <h2>Tiendas</h2>
              <span> Escoge tu pizzería favorita</span>
            </div>
            <ContainerStoreCard>
              {storesInfo?.map((item) => (
                <StoreComponent key={item.id} {...item} />
              ))}
            </ContainerStoreCard>
          </ContainerStore>

        </ContainerBody>
        <ContainerFooter>
          <ContainerSocialsNetworks>
            <a href='https://www.facebook.com/robinfood.Col/' target="noreferrer">
              <FacebookIcon />
            </a>
            <a href='https://www.instagram.com/robinfoodcol/' target="noreferrer">
              <InstagramIcon />
            </a>
          </ContainerSocialsNetworks>
          <IconFooter src={BestPizzaIconFooter} alt='bestPizza' onClick={() => { navigate('/login'); }} />
        </ContainerFooter>
      </ContainerRight>
    </ContainerRoot>
  )
};

export default Stores;