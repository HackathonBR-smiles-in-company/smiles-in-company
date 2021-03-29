import React from 'react';
import { MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
import { Container } from './styles';

import Sugestions from '../../components/Sugestions';
import Products from '../../components/Products';
import Tips from '../../components/Tips';

export default function Home() {
  return (
    <>
    <Container>
      
      <Sugestions/>
      <Tips />
      <Products />
    </Container>
    </>
  );
}
