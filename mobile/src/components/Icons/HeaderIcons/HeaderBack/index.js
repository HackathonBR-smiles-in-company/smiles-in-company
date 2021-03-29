import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Header } from './styles';

export default function HeaderIcons({direction}) {
  const navigation = useNavigation();
  
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => direction == null ?  navigation.goBack() : navigation.navigate(`${direction}`)}>
          <Feather name="arrow-left" size={30} color="#E60014" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
