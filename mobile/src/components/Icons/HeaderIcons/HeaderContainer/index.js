import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, Image } from './styles';
import imageLogo from '../../../../assets/logo.png'


export default function HeaderContainer({direction}) {
  const navigation = useNavigation();
  
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => null }>
          <Feather name="menu" size={30} color="#FFF" />
        </TouchableOpacity>
        <Image source={imageLogo} /> 
        <TouchableOpacity onPress={() => null} >
          <Feather name="menu" size={30} color="#F57921" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
