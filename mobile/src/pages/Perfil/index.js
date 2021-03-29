import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import { perfilOption } from '../../assets/Constants'
import perfilImage from '../../assets/img/perfil.png';
import { useNavigation, useRoute } from '@react-navigation/native';

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
 } from './styles';

export default function Perfil() {
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
        <OptionsContainer>
        <PaymentMethods>
            <PaymentList
            data={perfilOption}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
            <PaymentItem key={item.id} onPress={()=> {
              if(item.title == "Opiniões e Avaliações") 
                return navigation.navigate('Assessments') 
              if (item.title == "Meus pedidos")
                return navigation.navigate('MyRequests')  
               return navigation.goBack()
               
               }}>
                <item.lib name={item.icon} solid={true} size={20} /> 
                <PaymentHeader>
                <PaymentTitle>{item.title}</PaymentTitle>
                <PaymentDescription>{item.description}</PaymentDescription>
                </PaymentHeader>
                <Ionicons name="ios-arrow-forward" size={20} color="#E60014" />   
            </PaymentItem>
            )} />
      </PaymentMethods>  
      </OptionsContainer>
  </>
  );
}
