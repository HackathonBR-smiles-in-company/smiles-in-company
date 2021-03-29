import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Octicons, Feather } from '@expo/vector-icons';
import { Container, Header, HeaderIconsRight } from './styles';

export default function HeaderIcons() {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderIconsRight>
          <Octicons name="search" size={24} onPress={() => navigation.navigate('Search')} color="#E60014" />
          <Feather name="shopping-bag" padding={30} size={24} color="#E60014" />
          <Feather name="user" onPress={() => (navigation.navigate('Perfil'))} size={24} color="#E60014" />
        </HeaderIconsRight>
      </Header>
    </Container>
  );
}
