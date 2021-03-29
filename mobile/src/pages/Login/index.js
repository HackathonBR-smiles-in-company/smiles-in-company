import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ImageContainer, Input, Header, Label, TextConatiner, PrimaryButton, SecondaryButton } from './styles';

import banner from '../../assets/header-smiles.png'
import contentBackground from '../../assets/content-background.png'

const App = () => 
{
  const navigation = useNavigation();
  


return (
  <>
  <Container>
    <Header>
      <ImageContainer source={banner}>
      </ImageContainer>
    </Header>
  </Container>
    <ImageContainer source={contentBackground}>
      <TextConatiner>

      <Label>
          Nome ou CPF
        </Label>
        <Input />
        <Label>
          Senha
        </Label>
        <Input />


    <PrimaryButton onPress={() => navigation.navigate('Home')}>
      <Label>Entrar</Label>
    </PrimaryButton>


    <SecondaryButton>
      <Label>Cadastra-se</Label>
    </SecondaryButton>


      </TextConatiner>
    

    </ImageContainer>
  </>
)};

export default App;