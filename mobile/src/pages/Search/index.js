import React, { useState } from 'react';
import { MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
import { Container, SearchContainer, SearchText } from './styles';

import Sugestions from '../../components/Sugestions';
import Products from '../../components/Products';
import Tips from '../../components/Tips';

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <>
    <SearchContainer>
      <SearchText 
       onChangeText={(text) => setSearch(text) }
       placeholder="Digite o que deseja pesquisar ..."
       />
    </SearchContainer>
    <Container>
      <Products search={search} />
    </Container>
    </>
  );
}
