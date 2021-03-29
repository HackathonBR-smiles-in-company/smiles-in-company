import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Description,
         ProductList,ProductImage,
         ProductItem,
         Stars,
         Value,
         ProductContainer,
         OldValue,
         Discount,
         DiscountContainer,
         Title,
         TitleContainer
       }
       from './styles';

import {products} from '../../assets/Constants/index';

export default function List() {
  const navigation = useNavigation();
  return (
    <>
      <TitleContainer>
        <Title>OFERTAS DE HOJE</Title>
      </TitleContainer>
      <ProductList
      Vertical
      data={products}
      keyExtractor={product => String(product.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item:product}) => (
        <ProductItem
          onPress={() => navigation.navigate('Product',{product})}
        >
          <ProductImage source={product.img}></ProductImage>
          <ProductContainer>
            <Description>{ String(product.description).substr(0,25) +" .." }</Description>
            <Stars>
            {product.stars.map( (star) => (
                <AntDesign key={Math.random()} name="star" color={ star ? "#E60014" : "#CCC"} size={15}/>
              ))}
            </Stars>
            <OldValue>{Intl.NumberFormat('pt-BR'
                                            ,{ style: 'currency'
                                            , currency: 'BRL'})
                                            .format(product.oldValue)}
            </OldValue>
            <Value>{Intl.NumberFormat('pt-BR'
                                            ,{ style: 'currency'
                                            , currency: 'BRL'})
                                            .format(product.value)}
            </Value>
            <DiscountContainer>
            <Discount>{ Math.round(( product.value/ product.oldValue) * 100,2)}% de Desconto</Discount>
            </DiscountContainer>

          </ProductContainer>
        </ProductItem>
    )}
    />
  </> 

  );
}
