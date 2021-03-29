import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { DivisorLine } from './styles';

import imgBarCode from '../../assets/barCode.png';
import imgQRCode from '../../assets/qrCode.png';

export default function GetProduct() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
          marginBottom: 101,
          borderRadius: 4,
          borderWidth: 1,
          borderColor: '#CCC',
        }}>
        <View
          style={{
            borderRadius: 4,
            marginLeft: '4.27%',
            marginRight: '4.27%',
            marginTop: '14.39%',
            marginBottom: '15.14%',
          }}>
          <Image source={imgBarCode} />
        </View>

        <View
          style={{
            marginTop: 34,
          }}>
          <Image source={imgQRCode} />
        </View>
        <Text
          style={{
            marginTop: 16,
            marginBottom: 40,
            color: '#4F4F4F',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          ...
        </Text>

        <DivisorLine />

        <Text
          style={{
            marginTop: 16,
            marginBottom: 73,
            color: '#4F4F4F',
            fontSize: 12,
            textAlign: 'center',
          }}>
          Apresente esse código ao atendente para retirar seu produto.
        </Text>
      </View>
    </View>
  );
}
