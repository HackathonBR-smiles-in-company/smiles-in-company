import React, { useState } from 'react';
import { StyleSheet,Text, View, Dimensions } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { perfilOption } from '../../assets/Constants'
import perfilImage from '../../assets/img/perfil.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { assessments } from '../../assets/Constants';

import {
     Container,
     CardPerfil,
     ImagePerfil,
     OptionsContainer,
     PaymentMethods,
     PaymentMethodsTitle,
     PaymentList,
     PaymentItem,
     PaymentHeader,
     PaymentTitle,
     PaymentDescription,
     NamePerfil,
     StartPerfil,
     OpnionsPerfil,
     MessageContainer,
     MessageItem,
     MessageImagem,
     MessageProduct,
     MessageName,
     MessageDate,
     Value,
     MessageDescription,
 } from './styles';

export default function MyRequests() {

  const navigation = useNavigation();
  const initialLayout = 0;
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'Retirar na Loja'  },
    { key: 'second', title: 'Receber me Casa' },
  ]);

  const FirstRoute = () => (
    <MessageContainer
      data={assessments}
      keyExtractor={item => String(item.id)} 
      showsVerticalScrollIndicator={false} 
      renderItem={ ({item}) => item.tipo === "op_efetuadas" ? (
      <MessageItem onPress={() => { 
        if(item.ativo == 0)
          return null;
        return navigation.navigate('MyRequestItem',{item});
        }}>
        <MessageImagem source={item.img} 
        style={{width:100, height:100 }}
        resizeMode="contain"/>
        <MessageProduct>
          <MessageDescription ativo={item.ativo}>{item.description}</MessageDescription>
          <Value ativo={item.ativo}>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(item.value)}</Value>  
          <MessageName avaliation={item.avaliation} ativo={item.ativo}>{item.option}</MessageName>
        </MessageProduct>     
      </MessageItem>
      )
      :
      null
    }
    />
  );
  
  const SecondRoute = () => (
    <MessageContainer
      data={assessments}
      keyExtractor={item => String(item.id)}  
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) => item.tipo === "op_recebidas" ? (
      <MessageItem onPress={() => { 
        if(item.ativo == 0)
          return null;
        return navigation.navigate('MyRequestItem',{item});
        }}>
        <MessageImagem source={item.img} 
        style={{width:70, height:70 }}
        resizeMode="contain"/>
        <MessageProduct>
          <MessageDescription ativo={item.ativo}>{item.description}</MessageDescription>
          <Value ativo={item.ativo}>{Intl.NumberFormat('pt-BR'
                                        ,{ style: 'currency'
                                        , currency: 'BRL'})
                                        .format(item.value)}</Value>  
          <MessageName avaliation={item.avaliation} ativo={item.ativo}>{item.option}</MessageName>
        </MessageProduct>     
      </MessageItem>
      )
      :
      null
    }
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#000', }}
      style={{ backgroundColor: '#FAFAFA' }}

      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: '#000', margin: 8 }}>
          {route.title}
        </Text>
      )}

    />
  );

  return (
    <>
    <Container>
        <CardPerfil>
            <ImagePerfil source={perfilImage} />
            <NamePerfil>Marta Almeida</NamePerfil>
            <StartPerfil>
              <AntDesign key={Math.random()} name="star" color={"#E60014"} size={15}/>
              <AntDesign key={Math.random()} name="star" color={"#E60014"} size={15}/>
              <AntDesign key={Math.random()} name="star" color={"#E60014"} size={15}/>
              <AntDesign key={Math.random()} name="star" color={"#E60014"} size={15}/>
              <AntDesign key={Math.random()} name="star" color={"#CCC"} size={15}/>
            </StartPerfil>
            <OpnionsPerfil>31 Opniões</OpnionsPerfil>
        </CardPerfil>
    </Container>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  </>
  );
}
