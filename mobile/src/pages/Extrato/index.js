import React, { useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { realizarPagamentos, extratoAmeDigital } from '../../assets/Constants/index'

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
  ExtractItem

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
          <Header

colors={
  useBalance
    ? ['#F57921', '#868686']
    : ['#D3D3D3', '#868686']
}
start={[0, 0.3]}
>
<HeaderContainer>


  <BalanceContainer>
    <Title>Pontos Smiles 
</Title>
    <Value>
      <Bold>{isVisible ? '1234,34' : '----'}</Bold>
    </Value>
    <EyeButton onPress={handleToggleVisibility}>
      <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
    </EyeButton>
  </BalanceContainer>
</HeaderContainer>
</Header>

    <Wrapper>


      <UseBalance>
        <UseBalanceTitle>
          Utilizar Pontos
        </UseBalanceTitle>

        <Switch
          value={useBalance}
          trackColor={{ true: '#F57921', false: '#D3D3D3' }}
          thumbColor={useBalance ? "#FAFAFA" : "#CCC"}
          onValueChange={handleToggleUseBalance}

        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Extrato
      </PaymentMethodsTitle>
        <ExtractList
          data={extratoAmeDigital}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ExtractItem key={item.id}>
              <item.lib name={item.icon} style={{color: '#FFF'}} size={20} />
              <ExtractHeader>
                <ExtractTitle>{item.title}</ExtractTitle>
                <ExtractDate>{item.data}</ExtractDate>
              </ExtractHeader>
              <ExtractValue color={item.color}>{Intl.NumberFormat('pt-BR'
                , {
                })
                .format(item.value)}</ExtractValue>
            </ExtractItem>
          )}
        />

      </PaymentMethods>

     
    </Wrapper>
    </>
  );
}