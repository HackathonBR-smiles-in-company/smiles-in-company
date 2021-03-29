import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  PaymentMethods,
  PaymentMethodsIcon,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionTitle,
  PaymentMethodsDescriptionType,
  PaymentMethodsInfo,
} from './styles';

export default function HomeOrStore() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center' }}>
      <Text
        style={{
          marginTop: 24,
          width: 300,
          textAlign: 'center',
          marginBottom: 32,
          fontSize: 20,
          lineHeight: 23,
        }}>
        Selecione uma das opções para retirar o seu pedido.
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
          marginLeft: 16,
          marginRight: 16,
        }}>
        <PaymentMethods>
          <PaymentMethodsIcon>
            <MaterialCommunityIcons name="store" color="#333333" size={24} />
          </PaymentMethodsIcon>
          <PaymentMethodsDescription>
            <PaymentMethodsDescriptionTitle>Pegar na Loja</PaymentMethodsDescriptionTitle>
            <PaymentMethodsDescriptionType>
              Com o pagamento aprovado, pegue o produto na hora ou no mesmo dia.
            </PaymentMethodsDescriptionType>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Ionicons name="ios-arrow-forward" size={20} color="#EB5757" />
          </PaymentMethodsInfo>
        </PaymentMethods>
      </TouchableOpacity>

      <TouchableOpacity
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
        <PaymentMethods>
          <PaymentMethodsIcon>
            <Feather name="truck" color="#333333" size={24} />
          </PaymentMethodsIcon>
          <PaymentMethodsDescription>
            <PaymentMethodsDescriptionTitle>Receber em casa</PaymentMethodsDescriptionTitle>
            <PaymentMethodsDescriptionType>
              Aproveite toda a comodidade e agilidade na entrega do seu produto.
            </PaymentMethodsDescriptionType>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Ionicons name="ios-arrow-forward" size={20} color="#EB5757" />
          </PaymentMethodsInfo>
        </PaymentMethods>
      </TouchableOpacity>
    </View>
  );
}
