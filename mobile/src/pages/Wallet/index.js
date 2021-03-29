import React, { useState } from 'react';
import { Ionicons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';
import { Switch, View } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { realizarPagamentos, extratoAmeDigital, menu } from '../../assets/Constants/index'

import imageUser from '../../assets/user.png';

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
  const navigation = useNavigation();
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
    <Wrapper>


      <HeaderContainer>
        <PaymentMethods>

          <PaymentMethodsTitle>
            Olá, João da Silva
        </PaymentMethodsTitle>
          <PaymentMethodsTitle>
            150 milhas
        </PaymentMethodsTitle>

        <PaymentMethodsTitle>
          Período de férias: Dezembro 2021
        </PaymentMethodsTitle>

        </PaymentMethods>
        <Image source={imageUser} />
      </HeaderContainer>


      <PaymentMethods>


        <PaymentList
          data={menu}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PaymentItem key={item.id}

              onPress={

                () => navigation.navigate('Home')
              }
            >
              <item.lib name={item.icon} style={{ color: '#FFF' }} size={20} />
              <PaymentHeader >
                <PaymentTitle>{item.title}</PaymentTitle>
                <PaymentDescription>{item.description}</PaymentDescription>
              </PaymentHeader>
              <Ionicons name="ios-arrow-forward" style={{ color: '#FFF' }} size={15} />
            </PaymentItem>
          )}
        />


      </PaymentMethods>
    </Wrapper>
  );
}