import React, { useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { realizarPagamentos, rank } from '../../assets/Constants/index'

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  PaymentList,
  PaymentItem,
  PaymentHeader,
  PaymentImage,
  PaymentTitle,
  PaymentDescription,
  EyeButton,
  ExtractList,
  ExtractHeader,
  ExtractTitle,
  ExtractDate,
  ExtractValue,
  ExtractItem,
  Image

} from './styles';

export default function Wallet() {

  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (

    <>



    <Wrapper>



    <Title>
          Ranking
      </Title>
      <PaymentMethods>
        <PaymentMethodsTitle>
          Mês Março
      </PaymentMethodsTitle>
        <ExtractList
          data={rank}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ExtractItem key={item.id}>
              <ExtractHeader>
                <ExtractTitle>{item.title}</ExtractTitle>
              <ExtractValue color={'#FFF'}>{Intl.NumberFormat('pt-BR'
                , {
                })
                .format(item.value)} Pontos </ExtractValue> 
              </ExtractHeader>
              <Image source={item.img} />
            </ExtractItem>
          )}
        />

      </PaymentMethods>

     
    </Wrapper>
    </>
  );
}