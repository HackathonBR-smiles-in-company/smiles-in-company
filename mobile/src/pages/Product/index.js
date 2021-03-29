import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, YellowBox } from 'react-native';
import { AntDesign, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import { useNavigation, useRoute } from '@react-navigation/native';
import { products } from '../../assets/Constants';

import {
  Container,
  Content,
  Img,
  Title,
  Rating,
  PriceInfo,
  Value,
  Discount,
  Price,
  CashBack,
  CashBackText,
  PaymentMethods,
  PaymentMethodsIcon,
  PaymentMethodsDescription,
  PaymentMethodsDescriptionTitle,
  PaymentMethodsDescriptionType,
  MorePaymentMethodsLink,
  DivisorLine,
  PaymentMethodsInfo,
  MoreInfo,
  DivisorLineInfo,
  RateComments,
  RatingComments,
  DivisionRateComments,
  IconsLike,
  ButtonSale,
  BuyButton,
  AskOpinionButton,
  Stars
} from './styles';

export default function Product() {
  const navigation = useNavigation();
  const route = useRoute();
  const product = products.find(i => i.id == route.params.product.id)
  return (
    <View style={{ flex: 1, backgroundColor: '#fff',}}>
      <ScrollView style={{ flex: 1 }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
        <Container>
          <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
            <Img source={product.img}
            style={{ height:160 }}  />
          </ScrollView>
        </Container>
        <Content>
        <Title>{product.description}</Title>

          <Rating>
            <Stars>
          {product.stars.map( (star) => (
              <AntDesign key={Math.random()} name="star" color={ star ? "#E60014" : "#CCC"} size={15}/>
            ))}
          </Stars>
            <Text style={{ marginLeft: 10 }}>({ Math.round(Math.random()*157,0) + 130 })</Text>
          <Text style={{ marginLeft: 100, marginRight: 16 }}>Cód. { 1359 + Math.round(Math.random(),0)}</Text>
          </Rating>

          <PriceInfo>
            <Value>
              <Discount>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(product.oldValue)}</Discount>
              <Price>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(product.value)}</Price>
            </Value>
            <CashBack>
              <CashBackText>
              {Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(product.value * 0.03)} de cashback</CashBackText>
            </CashBack>
          </PriceInfo>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#EB5757" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Cartão Americanas</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>24x 
                {Intl.NumberFormat( 'pt-BR'
                                  ,{ style: 'currency'
                                  , currency: 'BRL'})
                                  .format(product.value / 24)} sem juros</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
          </PaymentMethods>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="credit-card" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Cartão de Crédito</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>12x
              {Intl.NumberFormat( 'pt-BR'
                                  ,{ style: 'currency'
                                  , currency: 'BRL'})
                                  .format(product.value / 12)} sem juros</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
          </PaymentMethods>

          <MorePaymentMethodsLink>
            <Text
              style={{
                fontSize: 14,
                color: '#2F80ED',
                textDecorationLine: 'underline',
              }}>
              mais formas de pagamento
            </Text>
          </MorePaymentMethodsLink>

          <DivisorLine />

          <PaymentMethods>
            <PaymentMethodsIcon>
              <Feather name="truck" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Receber em Casa</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>
                Recebe em até 7 dias úteis
              </PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <PaymentMethodsDescriptionType style={{ fontWeight: 'bold' }}>
                R$ 29,90
              </PaymentMethodsDescriptionType>
            </PaymentMethodsInfo>
          </PaymentMethods>

          <PaymentMethods>
            <PaymentMethodsIcon>
              <MaterialCommunityIcons name="store" color="#333333" size={24} />
            </PaymentMethodsIcon>
            <PaymentMethodsDescription>
              <PaymentMethodsDescriptionTitle>Pegar na Loja</PaymentMethodsDescriptionTitle>
              <PaymentMethodsDescriptionType>1 dia útil</PaymentMethodsDescriptionType>
            </PaymentMethodsDescription>
            <PaymentMethodsInfo>
              <PaymentMethodsDescriptionType style={{ fontWeight: 'bold', color: '#219653' }}>
                Grátis
              </PaymentMethodsDescriptionType>
            </PaymentMethodsInfo>
          </PaymentMethods>

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Informações Técnicas
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
            <MoreInfo>
              <Text style={{ color: '#828282', fontSize: 14 }}>
                A Máquina de Lavar Brastemp 12kg conta com design moderno e exclusivo e a alta
                performance do ciclo tira-manchas Advanced para retirar mais de 40 manc...
              </Text>
            </MoreInfo>
          </TouchableOpacity>

          <DivisorLineInfo />

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Descrição
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
            <MoreInfo>
              <Text style={{ color: '#828282', fontSize: 14 }}>
                A Máquina de Lavar Brastemp 12kg conta com design moderno e exclusivo e a alta
                performance do ciclo tira-manchas Advanced para retirar mais de 40 manc...
              </Text>
            </MoreInfo>
          </TouchableOpacity>

          <DivisorLineInfo />

          <TouchableOpacity>
            <PaymentMethods style={{ marginTop: 41 }}>
              <PaymentMethodsIcon>
                <Text
                  style={{
                    fontSize: 18,
                    lineHeight: 21,
                    color: '#4F4F4F',
                    fontWeight: 'bold',
                  }}>
                  Avaliações
                </Text>
              </PaymentMethodsIcon>

              <PaymentMethodsInfo>
                <Ionicons name="ios-arrow-forward" size={20} color="#4F4F4F" />
              </PaymentMethodsInfo>
            </PaymentMethods>
          </TouchableOpacity>

          <RateComments>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>5.0</Text>
            <DivisionRateComments>
              <RatingComments>
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
                <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
              </RatingComments>
              <Text style={{ fontSize: 10, color: '#828282' }}>100% dos clientes recomendam</Text>
            </DivisionRateComments>
          </RateComments>

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#4F4F4F" />
            <AntDesign name="like2" size={24} color="#219653" />
          </IconsLike>

          <DivisorLineInfo />

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                não gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#CCC'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#EB5757" />
            <AntDesign name="like2" size={24} color="#4F4F4F" />
          </IconsLike>

          <DivisorLineInfo />

          <PaymentMethods style={{ marginTop: 24 }}>
            <PaymentMethodsIcon>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 21,
                  color: '#4F4F4F',
                  fontWeight: 'bold',
                }}>
                gostei muito
              </Text>
            </PaymentMethodsIcon>

            <PaymentMethodsInfo>
              <Text style={{ fontSize: 12, color: '#828282' }}>18/03/2020</Text>
            </PaymentMethodsInfo>
          </PaymentMethods>
          <RatingComments style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }}>
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
            <AntDesign key={Math.random()} name="star" color={'#F2C94C'} size={15} />
          </RatingComments>
          <Text style={{ fontSize: 14, color: '#828282', marginLeft: 16, marginTop: 8 }}>
            entrega no prazo correto e o produto veio certo. muito bom. recomendo
          </Text>
          <IconsLike>
            <AntDesign style={{ marginRight: 27 }} name="dislike2" size={24} color="#4F4F4F" />
            <AntDesign name="like2" size={24} color="#219653" />
          </IconsLike>

          <DivisorLineInfo style={{ marginBottom: 150 }} />
        </Content>
      </ScrollView>

      <View style={{ width: '100%', position: 'absolute', bottom: 0, }}>
        <ButtonSale style={{ paddingTop: 5, backgroundColor:'#FFF', paddingTop:15,  }}>
          <NumericInput
            rounded
            onChange={() => {}}
            type="plus-minus"
            totalWidth={164}
            totalHeight={55}
            iconSize={25}
            
            minValue={1}
            initValue={1}
            

            borderColor="#fff"
            containerStyle={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 1,
            }}
          />

          <BuyButton onPress={() => navigation.navigate('HomeOrStore')}>
            <Text style={{ color: '#fff', fontSize: 16, lineHeight: 19 }}>Comprar</Text>
          </BuyButton>
        </ButtonSale>

        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#fff',paddingBottom:50, }}>
          <AskOpinionButton
            style={{
              borderWidth: 2,
              borderColor: '#E60014',
              borderRadius: 4,
              marginTop: 5,
              marginBottom: 5,
            }}
            onPress={() => navigation.navigate('Chat')}>
            <Text
              style={{
                alignItems: 'center',
                color: '#E60014',
                fontSize: 16,
                lineHeight: 19,
              }}>
              Pedir opinião de um comprador
            </Text>
          </AskOpinionButton>
        </View>
      </View>
    </View>
  );
}
