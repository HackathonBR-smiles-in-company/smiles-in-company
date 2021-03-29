import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Header } from './styles';

export default function HeaderIcons() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AssessmentSuccess');
          }}>
          <Text
            style={{
              fontSize: 14,
              alignSelf: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              textAlignVertical: 'center',
              color: '#E60014',
            }}>
            Finalizar conversa
          </Text>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
