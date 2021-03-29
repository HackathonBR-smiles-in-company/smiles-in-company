import React, {useState} from 'react';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Description, ProductList,ProductImage, ProductItem, Stars ,Value } from './styles';

import {products} from '../../assets/Constants/index';

export default function List(props) {
  const [searchProduct,setSearchProduct] = useState(props.search);
  const navigation = useNavigation();
  return (
    <ProductList
    Vertical
    data={products}
    numColumns={2}
    keyExtractor={product => String(product.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item:product}) => product.description.search(props.search) !== -1 ?  (
      <ProductItem
        onPress={ () => navigation.navigate('Product', {product}) }
      >

        <ProductImage source={product.img}></ProductImage>
        <Description>{ String(product.description).substr(0,25) +" .." }</Description>
        <Stars>
         {product.stars.map( (star) => (
            <AntDesign key={Math.random()} name="star" color={ star ? "#E60014" : "#CCC"} size={15}/>
          ))}
        </Stars>
        <Value>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(product.value)}
        </Value>
        
      </ProductItem>
    )
    :
    null
  }
    />

  );
}
