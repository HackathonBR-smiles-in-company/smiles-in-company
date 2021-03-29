import React from 'react';
import { View, Text, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import answersucess from '../../assets/img/answersucess.png';

import {BuyButton} from './styles';

export default function AnswerSuccess() {
  const navigation = useNavigation();
  return (
  <>
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{ marginTop: 24, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Agradecemos a sua avaliação!</Text>
      </View>
      <View style={{ marginTop: 16, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>
          <Text style={{ fontWeight: 'normal' }}>Sua</Text> gorjeta de 5,00{' '}
          <Text style={{ fontWeight: 'normal' }}>já foi enviada para a </Text>
          carteira Ame da Marta! <Text style={{ fontWeight: 'normal' }}>:)</Text>
        </Text>
      </View>
      <View
        style={{
          marginLeft: '4.27%',
          marginRight: '4.27%',
          marginTop: 10,
          marginBottom: '15.14%',
        }}>
        <Image source={answersucess} />
      </View>
    </View>

    <BuyButton
    onPress={() => { navigation.navigate('Wallet')}}>
    <Text style={{ color: '#fff', fontSize: 16}}>Ver meu Saldo</Text>
    </BuyButton>
  </>
  );
}
