import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input';

import {
  PaymentMethods,
  PaymentMethodsIcon,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionTitle,
  PaymentMethodsDescriptionType,
  PaymentMethodsInfo,
  DivisorLine,
  BuyButton,
  AskOpinionButton,
} from './styles';

import imgCard from '../../assets/img/product/apple-watch.png';
import ameImg from '../../assets/ame.png';

export default function GetInStore() {
  const navigation = useNavigation();
  const [isSelectedFirst, setIsSelectedFirst] = useState(false);
  const [isSelectedSecond, setIsSelectedSecond] = useState(false);

  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'flex-start' }}>
        <Text
          style={{
            marginTop: 24,
            marginLeft: 16,
            width: 300,
            textAlign: 'left',
            marginBottom: 32,
            fontSize: 20,
            lineHeight: 23,
          }}>
          Loja
        </Text>

        <PaymentMethods style={{ marginbackgroundColor: 'red' }}>
          <PaymentMethodsIcon>
            <MaterialCommunityIcons name="store" color="#333333" size={24} />
          </PaymentMethodsIcon>
          <PaymentMethodsDescription>
            <PaymentMethodsDescriptionTitle>
              Lojas Americanas, Centro
            </PaymentMethodsDescriptionTitle>
            <PaymentMethodsDescriptionType>Bairro, Cidade - Estado</PaymentMethodsDescriptionType>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: '#2F80ED', textDecorationLine: 'underline' }}>
                Alterar
              </Text>
            </TouchableOpacity>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <TouchableOpacity
          onPress={() => {
            setIsSelectedFirst(true);
            setIsSelectedSecond(false);
            // navigation.navigate('GetInStore');
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#CCC',
            textAlign: 'center',
            marginLeft: 16,
            marginRight: 16,
          }}>
          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Pegar agora</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>
                Com o pagamento aprovado, você leva o produto imediatamente.
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo style={{ marginLeft: 30 }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSelectedFirst(true);
                    setIsSelectedSecond(false);
                  }}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#E60014',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {isSelectedFirst && (
                    <View
                      style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#E60014' }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </PaymentMethodsInfo>
          </PaymentMethods>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setIsSelectedSecond(true);
            setIsSelectedFirst(false);
          }}
          style={{
            marginTop: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#CCC',
            textAlign: 'center',
            marginLeft: 16,
            marginRight: 16,
          }}>
          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Agendar retirada</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>
                Com o pagamento aprovado até as 16h, você pega o produto no mesmo dia.
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setIsSelectedSecond(true);
                    setIsSelectedFirst(false);
                  }}
                  style={{
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#E60014',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {isSelectedSecond && (
                    <View
                      style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: '#E60014' }}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </PaymentMethodsInfo>
          </PaymentMethods>
        </TouchableOpacity>

        <PaymentMethods style={{ marginTop: 24 }}>
          <PaymentMethodsDescription
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                borderRadius: 2,
                height: 76,
                width: 74,
              }}>
              <Image source={imgCard} style={{ flex: 1, width: undefined, height: undefined }} />
            </View>
            <View style={{ maxWidth: 253, marginLeft: 16 }}>
              <PaymentMethodsDescriptionType style={{ marginLeft: 16, fontWeight: 'bold' }}>
                Apple Watch Series 5 Gps, 44mm Space Grey Aluminium Case With Black Sport
              </PaymentMethodsDescriptionType>
              <Text style={{ marginLeft: 16, width: '100%', marginTop: 8 }}>
                Vendido e entregue por Americanas
              </Text>
              <Text style={{ marginLeft: 16, marginTop: 8 }}>Cor: Preto</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 16,
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Text style={{ fontWeight: 'bold' }}>R$ 1.549,99</Text>
                <NumericInput
                  rounded
                  onChange={() => {}}
                  type="plus-minus"
                  totalWidth={90}
                  totalHeight={50}
                  iconSize={16}
                  minValue={0}
                  borderColor="#fff"
                />
              </View>
            </View>
          </PaymentMethodsDescription>
        </PaymentMethods>

        <DivisorLine />

        <PaymentMethods>
          <PaymentMethodsDescription>
            <Text>SubTotal:</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text>R$ 1.549,99</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <PaymentMethods>
          <PaymentMethodsDescription style={{ width: 200 }}>
            <Text>Cupom de Desconto:</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: '#2F80ED', textDecorationLine: 'underline' }}>
                Inserir cupom
              </Text>
            </TouchableOpacity>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <PaymentMethods>
          <PaymentMethodsDescription>
            <Text style={{ fontWeight: 'bold' }}>Total:</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ fontWeight: 'bold' }}>R$ 1.549,99</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <Text
          style={{
            marginTop: 24,
            marginLeft: 16,
            width: 300,
            textAlign: 'left',
            marginBottom: 32,
            fontSize: 20,
            lineHeight: 23,
          }}>
          Formas de Pagamento
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('GetInStore')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#CCC',
            textAlign: 'center',
            paddingTop: 16,
            marginLeft: 16,
            marginRight: 16,
          }}>
          <PaymentMethods style={{ alignItems: 'center' }}>
            <View
              style={{
                borderRadius: 2,
                height: 20,
                width: 24,
                marginRight: 11,
              }}>
              <Image source={ameImg} style={{ flex: 1, width: undefined, height: undefined }} />
            </View>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Ame</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType style={{ color: '#170085', fontWeight: 'bold' }}>
                Saldo: R$ 400,00
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedFirst(true);
                  setIsSelectedSecond(false);
                }}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#333333',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </PaymentMethodsInfo>
          </PaymentMethods>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GetInStore')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#CCC',
            textAlign: 'center',
            marginLeft: 16,
            paddingTop: 16,
            marginRight: 16,
          }}>
          <PaymentMethods style={{ alignItems: 'center' }}>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Cartão de Crédito</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType style={{ color: '#4F4F4F' }}>
                **** 4879
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <TouchableOpacity
                onPress={() => {
                  setIsSelectedFirst(true);
                  setIsSelectedSecond(false);
                }}
                style={{
                  height: 24,
                  width: 24,
                  borderRadius: 4,
                  borderWidth: 2,
                  borderColor: '#333333',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </PaymentMethodsInfo>
          </PaymentMethods>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('GetInStore')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#CCC',
            textAlign: 'center',
            paddingTop: 16,
            marginLeft: 16,
            marginRight: 16,
          }}>
          <PaymentMethods style={{ alignItems: 'center' }}>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#EB5757" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>
                Novo Cartão de Crédito
              </PaymentMethodsDescriptionTitle>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <Feather name="plus" size={20} color="#EB5757" />
            </PaymentMethodsInfo>
          </PaymentMethods>
        </TouchableOpacity>

        <View
          style={{
            marginRight: 50,
            marginLeft: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            width: 327,
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <BuyButton
            onPress={() => navigation.navigate('GetProduct')}
            style={{
              backgroundColor: '#E60014',
              marginTop: 8,
              alignSelf: 'center',
              marginBottom: 5,
            }}>
            <Text style={{ color: '#fff', fontSize: 16, lineHeight: 19 }}>Finalizar compra</Text>
          </BuyButton>
        </View>

        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#fff' }}>
          <AskOpinionButton
            style={{
              marginRight: 50,
              marginLeft: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 2,
              borderColor: '#E60014',
              borderRadius: 4,
              marginTop: 8,
              width: 327,
              marginBottom: 5,
            }}>
            <Text
              style={{
                alignItems: 'center',
                color: '#E60014',
                fontSize: 16,
                lineHeight: 19,
              }}>
              Escolher mais produtos
            </Text>
          </AskOpinionButton>
        </View>
      </View>
    </ScrollView>
  );
}
