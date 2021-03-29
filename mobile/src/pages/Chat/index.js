import React from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { ButtonSale, BuyButton } from './styles';

import imgLogo from '../../assets/mask.png';

export default function Chat() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          background: '#F2F2F2',
          width: 100,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 22,
        }}>
        <Text
          style={{
            borderRadius: 8,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 16,
            paddingRight: 16,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: '#828282',
            backgroundColor: '#F2F2F2',
          }}>
          04/05/20
        </Text>
      </View>
      <ScrollView style={{ width: '100%', flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            margin: 16,
          }}>
          <View style={{ flex: 1 }}>
            <Image source={imgLogo} />
          </View>

          <View style={{ flex: 5, marginRight: 18 }}>
            <Text
              style={{
                backgroundColor: '#F2F2F2',
                paddingTop: 6,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 8,
                color: '#4F4F4F',
              }}>
              Olá, Marta. A Joana gostaria de saber a sua opinião sobre a{' '}
              <Text style={{ fontWeight: 'bold' }}>Batedeira Planetária Arno</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            margin: 16,
            marginTop: 0,
          }}>
          <View style={{ flex: 1 }}>
            <Image source={imgLogo} />
          </View>

          <View style={{ flex: 5, marginRight: 18 }}>
            <Text
              style={{
                backgroundColor: '#F2F2F2',
                paddingTop: 6,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 8,
                color: '#4F4F4F',
              }}>
              Você pode ajudar?
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <ButtonSale style={{ paddingTop: 5, flex: 1 }}>
          <BuyButton style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => {}}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>
              Infelizmente, não.
            </Text>
          </BuyButton>
          <BuyButton
            onPress={() => {
              navigation.navigate('AnswerChat');
            }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>
              Sim!
            </Text>
          </BuyButton>
        </ButtonSale>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            marginBottom: 8,
            width: '100%',
            alignItems: 'center',
            paddingTop: 8,
            backgroundColor: '#FAFAFA',
            justifyContent: 'center',
            marginRight: 16,
          }}>
          <TextInput
            style={{
              paddingLeft: 16,
              fontSize: 16,
              color: '#4F4F4F',
              height: 40,
              width: 295,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#CCC',
            }}
            placeholder="Escreva uma mensagem"
          />

          <TouchableOpacity>
            <View
              style={{
                marginLeft: 9,
                borderRadius: 20,
                width: 40,
                height: 40,
                backgroundColor: '#F2F2F2',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Feather name="send" size={24} color="#E60014" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
