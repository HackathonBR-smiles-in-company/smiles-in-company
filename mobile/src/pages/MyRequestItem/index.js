import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  PaymentMethods,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionType,
  BuyButton,
  PaymentMethodsInfo,
  ViewGetProduct,
  ViewAssessmentProduct,
  Stars,
  AvaliationInput,
  ViewAssessmentContainer,
  ViewAssessment,
} from './styles';

export default function MyRequestItem() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.item;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          alignItems: 'center',
        }}>
        <PaymentMethods style={{ marginTop: 5 }}>
          <PaymentMethodsDescription
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                borderRadius: 2,
                height: 115,
                width: 164,
              }}>
              <Image source={item.img} style={{ flex: 1, width: undefined, height: undefined }} />
            </View>

            <View style={{ marginRight: 16 }}>
              <PaymentMethodsDescriptionType >
                {item.description}
              </PaymentMethodsDescriptionType>

              <PaymentMethodsDescription
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 16,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{ color: '#4F4F4F', fontSize: 14 }}>Valor:</Text>
                <Text style={{ color: '#333333', fontSize: 14 }}>
                {Intl.NumberFormat('pt-BR',{ style: 'currency'
                                          , currency: 'BRL'})
                                          .format(item.value)}
                </Text>
              </PaymentMethodsDescription>

              <PaymentMethodsDescription
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 16,
                  marginLeft: 16,
                  marginTop: 10,
                  alignItems: 'center',
                  width: 150,
                }}>
                <Text style={{ color: '#4F4F4F', fontSize: 14 }}>Pedido:</Text>
                <Text style={{ color: '#333333', fontSize: 14 }}>02-8749487</Text>
              </PaymentMethodsDescription>
            </View>
          </PaymentMethodsDescription>
        </PaymentMethods>

        <Text
          style={{
            marginTop: 15,
            textAlign: 'center',
            marginBottom: 32,
            fontSize: 20,
            lineHeight: 23,
          }}>
          Acompanhe seu pedido
        </Text>

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>Pedido efetuado</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>{item.data}</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>
              Pagamento efetuado
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>{item.data}</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>
              Nota fiscal emitida
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>{item.data}</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />

        <PaymentMethods style={{ marginBottom: 0 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#828282', fontSize: 14 }}>Em transporte</Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#828282', fontSize: 14 }}>{item.data}</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <View
          style={{
            borderStyle: 'solid',
            borderColor: '#BDBDBD',
            height: 17,
            borderLeftWidth: 1,
            alignSelf: 'flex-start',
            marginLeft: 23,
            marginTop: 4,
            marginBottom: 4,
          }}
        />
        <PaymentMethods style={{ marginBottom: 62 }}>
          <PaymentMethodsDescription style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 16,
                width: 16,
                borderRadius: 12,
                borderWidth: 1,
                backgroundColor: '#219653',
                borderColor: '#219653',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ marginLeft: 16, color: '#219653', fontSize: 14 }}>
            {item.tipo !== 'op_recebidas' ? 'Disponível para retirar' : 'Entrega agendada para hoje' }
            </Text>
          </PaymentMethodsDescription>
          <PaymentMethodsInfo>
            <Text style={{ color: '#219653', fontSize: 14 }}>{item.data}</Text>
          </PaymentMethodsInfo>
        </PaymentMethods>

        <ViewGetProduct
          avaliation={item.avaliation}
          tipo={item.tipo}>
          <BuyButton
            onPress={() => { navigation.navigate('GetProduct')}}
            >
            <Text style={{ color: '#fff', fontSize: 16,}}>Retirar Produto</Text>
          </BuyButton>
        </ViewGetProduct>

        <ViewAssessment
            avaliation={item.avaliation}>
              <Text style={{
                        textAlign: 'center',
                        padding: 5,
                        fontSize: 20,
                        lineHeight: 23,
                      }}>
                Avalie seu pedido
              </Text>

              <Stars>
              {([1,2,3,4,5]).map( (star) => (
                  <AntDesign key={Math.random()} name="star" color={ star ? "#E60014" : "#CCC"} size={25}/>
                ))}
            </Stars>
          
            <ViewAssessmentContainer >
              <AvaliationInput
                  placeholder="Título" />
            </ViewAssessmentContainer>

            <ViewAssessmentContainer >
              <AvaliationInput
                  placeholder="Conte o que você achou desse produto..." /> 
            </ViewAssessmentContainer>
          </ViewAssessment>

          <ViewAssessmentProduct 
            avaliation={item.avaliation}
            >
            <BuyButton
              onPress={() => { navigation.navigate('AnswerSuccess')}}>
              <Text style={{ color: '#fff', fontSize: 16}}>Avaliar Produto</Text>
            </BuyButton>
          </ViewAssessmentProduct>


      </View>
    </ScrollView>
  );
}
