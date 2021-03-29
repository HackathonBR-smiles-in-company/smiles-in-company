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
     LastMessage,
     MessageDescription,
 } from './styles';

export default function Assessments() {

  const initialLayout = 0;
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'first', title: 'Opiniões Efetuadas', backgroundColor: '#fff' },
    { key: 'second', title: 'Opiniões Recebidas' },
  ]);

  const FirstRoute = () => (
    //<View style={[{ backgroundColor: '#FAFAFA',flex:1, }]} />
    <MessageContainer
      data={assessments}
      keyExtractor={item => String(item.id)} 
      showsVerticalScrollIndicator={false} 
      renderItem={ ({item}) => item.tipo === "op_efetuadas" ? (
      <MessageItem
      
      onPress={() => navigation.navigate('Chat')}>
        <MessageImagem source={item.img} 
        style={{width:70, height:70 }}
        resizeMode="contain"/>
        <MessageProduct>
          <MessageDescription ativo={item.ativo}>{item.description}</MessageDescription>
          <MessageName ativo={item.ativo}>{item.client}</MessageName>
          <LastMessage ativo={item.ativo}>{item.message}</LastMessage>  
        </MessageProduct>     
        <MessageDate>{item.data}</MessageDate>
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
      <MessageItem
      onPress={() => navigation.navigate('Chat')}>
        <MessageImagem source={item.img} 
        style={{width:70, height:70 }}
        resizeMode="contain"/>
        <MessageProduct>
          <MessageDescription ativo={item.ativo}>{item.description}</MessageDescription>
          <MessageName ativo={item.ativo}>{item.client}</MessageName>
          <LastMessage ativo={item.ativo}>{item.message}</LastMessage>  
        </MessageProduct>     
        <MessageDate>{item.data}</MessageDate>
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

  const navigation = useNavigation();
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
