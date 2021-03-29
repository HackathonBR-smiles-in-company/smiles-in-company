import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Header, HeaderIconsRight } from './styles';

export default function HeartShareShoppingCart() {
  return (
    <Container>
      <Header>
        <HeaderIconsRight>
          <Feather name="heart" size={24} color="#E60014" />
          <Feather name="share-2" size={24} color="#E60014" />
          <Feather name="shopping-bag" size={24} color="#E60014" />
        </HeaderIconsRight>
      </Header>
    </Container>
  );
}
