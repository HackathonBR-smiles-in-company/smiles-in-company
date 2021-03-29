import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons, Fontisto, Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import imgProductAppleWatch from '../img/product/apple-watch.png';
import imgProductAspirador from '../img/product/aspirador-po.png';
import imgProductLavadora from '../img/product/lavadora.png';
import imgProductNotebook from '../img/product/notebook.png';
import imgProductSmartphone from '../img/product/smartphone.png';

export const products = [
    item = {
      id: 1, 
      description: "Apple Watch Series 3 GPS - 38 mm – Caixa cinza-espacial de alumínio com pulseira esportiva Preta",
      stars: [true,true,true,true,false],
      value: 1785.99,
      oldValue: 1785.99 + 479.00,
      img: imgProductAppleWatch, },
    item = {
      id: 2, 
      description: "Lavadora de Roupas Brastemp 12Kg BWK12 Branca 110V",
      stars: [true,true,true,true,true],
      value: 1549.99 ,
      oldValue: 1549.99 + 479.00,
      img: imgProductLavadora, },
    item = {
      id: 3, 
      description: "Aspirador Pó Philco Ph1100 Rapid Turbo 2 em 1 Vermelho - 1000W - 220V",
      stars: [true,true,true,false,false],
      value: 149.99,
      oldValue: 149.99 + 479.00,
      img: imgProductAspirador, },
    item = {
      id: 4, 
      description: "Notebook Samsung Essentials E20 Intel Celeron 4GB 500GB HD LED 15,6'' W10 Cinza",
      stars: [true,true,true,true,false],
      value: 1936.08,
      oldValue: 1936.08 + 479.00,
      img: imgProductNotebook, },
    item = {
      id: 5, 
      description: "Smartphone Samsung Galaxy A10 32GB Dual Chip Android 9.0 Tela 6.2' Octa-Core 4G Câmera 13MP - Preto",
      stars: [true,true,true,true,false],
      value: 849.99,
      oldValue: 849.99 + 479.00,
      img: imgProductSmartphone, },
    item = {
      id: 6, 
      description: "Apple Watch Series 3 GPS - 38 mm – Caixa cinza-espacial de alumínio com pulseira esportiva Preta",
      stars: [true,true,true,true,false],
      value: 1785.99,
      oldValue: 1785.99 + 479.00,
      img: imgProductAppleWatch, },
    item = {
      id: 7, 
      description: "Lavadora de Roupas Brastemp 12Kg BWK12 Branca 110V",
      stars: [true,true,true,true,false],
      value: 1549.99 ,
      oldValue: 1549.99 + 479.00,
      img: imgProductLavadora, },
    item = {
      id: 8, 
      description: "Aspirador Pó Philco Ph1100 Rapid Turbo 2 em 1 Vermelho - 1000W - 220V",
      stars: [true,true,true,true,true],
      value: 149.99,
      oldValue: 149.99 + 479.00,
      img: imgProductAspirador, },
    item = {
      id: 9, 
      description: "Notebook Samsung Essentials E20 Intel Celeron 4GB 500GB HD LED 15,6'' W10 Cinza",
      stars: [true,true,true,false,false],
      value: 1936.08,
      oldValue: 1936.08 + 479.00,
      img: imgProductNotebook, },
    item = {
      id: 10, 
      description: "Smartphone Samsung Galaxy A10 32GB Dual Chip Android 9.0 Tela 6.2' Octa-Core 4G Câmera 13MP - Preto",
      stars: [true,true,true,true, false],
      value: 849.99,
      oldValue: 849.99 + 479.00,
      img: imgProductSmartphone, },
]



import imgBanner1 from '../../assets/img/banner/banner1.png';
import imgBanner2 from '../../assets/img/banner/banner2.png';
import imgBanner3 from '../../assets/img/banner/banner3.png';

export const baners = [
  {
    key: String(Math.random()),
    img: imgBanner1,
  },
  {
    key: String(Math.random()),
    img: imgBanner2,
  },
  {
    key: String(Math.random()),
    img: imgBanner3,
  },
];


import imgDepartamentBeleza from '../../assets/img/departament/beleza.png';
import imgDepartamentCelulares from '../../assets/img/departament/celulares.png';
import imgDepartamentChocolates from '../../assets/img/departament/chocolates.png';
import imgDepartamentJogos from '../../assets/img/departament/jogos.png';
import imgDepartamentNotebooks from '../../assets/img/departament/notebooks.png';
import imgDepartamentPerfumaria from '../../assets/img/departament/perfumaria.png';
import imgDepartamentTablets from '../../assets/img/departament/tablets.png';
import imgDepartamentValePresente from '../../assets/img/departament/vale-presente.png';

export const sugestions = [
  {
    key: String(Math.random()),
    img: imgDepartamentBeleza,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentCelulares,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentChocolates,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentJogos,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentNotebooks,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentPerfumaria,
    category: true,
  },  {
    key: String(Math.random()),
    img: imgDepartamentTablets,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: true,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
  {
    key: String(Math.random()),
    img: imgDepartamentValePresente,
    category: false,
  },
]


export const realizarPagamentos = [
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "money-bill",
    title: "Transações",
    description: "Boletos, recargas, pagamentos",
  },
  item = 
  {
    id: Math.random(),
    lib: AntDesign,
    icon: "creditcard",
    title: "Meus Cartões",
    description: "Cadastrar ou Remover Cartões",
  },
];


export const menu = [
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "user",
    title: "Metas",
    description: "",
  },
  item = 
  {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "money-bill",
    title: "Resgate de Pontos",
    description: "",
  },
  item = 
  {
    id: Math.random(),
    lib: Fontisto,
    icon: "shopping-pos-machine",
    title: "Avaliações",
    description: "",
  },
  item = 
  {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "receipt",
    title: "Ranking",
    description: "",
  },
];


export const extratoAmeDigital = [
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "user-friends",
    title: "Transferência | Everton Ferrreira",
    data: "12/03/2020",
    value: -50.00,
    color: '#F57921',
  },
  item = 
  {
    id: Math.random(),
    lib: Ionicons,
    icon: "md-appstore",
    title: "Compra | Apple Watch 3         ",
    data: "03/03/2020",
    value: -380.00,
    color: '#F57921',
  },
  item = 
  {
    id: Math.random(),
    lib: MaterialIcons,
    icon: "local-grocery-store",
    title: "Lojas Americanas | Curitiba         ",
    data: "15/03/2020",
    value: -175.00,
    color: '#F57921',
  },
  item = 
  {
    id: Math.random(),
    lib: AntDesign,
    icon: "creditcard",
    title: "Cashback | Apple Watch 3                ",
    data: "15/03/2020",
    value: +80.00,
    color: '#FFF',
  },
  item = 
  {
    id: Math.random(),
    lib: Ionicons,
    icon: "md-appstore",
    title: "Compra | Apple Watch 3         ",
    data: "15/03/2020",
    value: -2380.00,
    color: '#F57921',
  },
  item = 
  {
    id: Math.random(),
    lib: MaterialCommunityIcons,
    icon: "cash-usd",
    title: "Avaliação | Apple Watch 3                ",
    data: "23/03/2020",
    value: +15.00,
    color: '#FFF',
  },
  item = 
  {
    id: Math.random(),
    lib: MaterialCommunityIcons,
    icon: "cash-usd",
    title: "Avaliação | Shure SHR440              ",
    data: "23/03/2020",
    value: +17.00,
    color: '#F57921',
  },
];


export const perfilOption = [
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "user",
    title: "Perfil",
    description: "Nome, telefone, email",
  },
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "book",
    title: "Meus pedidos",
    description: "Histórico de compras",
  },
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "money-bill",
    title: "Opiniões e Avaliações",
    description: "Conversas e Interações",
  },
  item = {
    id: Math.random(),
    lib: MaterialCommunityIcons,
    icon: "map-marker",
    title: "Endereços",
    description: "Meus endereços de entrega",
  },
  item = {
    id: Math.random(),
    lib: FontAwesome5,
    icon: "map-marked-alt",
    title: "Encontre uma Loja",
    description: "A Americanas mais perto de você!",
  },
  item = {
    id: Math.random(),
    lib: MaterialIcons,
    icon: "settings",
    title: "Configurações",
    description: "Preferências do app",
  },
];

export const assessments = [
  item = {
    id: Math.random(),
    avaliation: 0,
    option: 'Acompanhar Entrega', 
    cpf: "10045632995",
    description: "Apple Watch Series 3 GPS",
    client: "Letícia Motta",
    value: 1785.99,
    data: "03/05/20",
    ativo: 1,
    img: imgProductAppleWatch,
    tipo: "op_recebidas",
    message: "Olá"},
  item = {
    id: Math.random(),
    avaliation: 0,
    option: 'Acompanhar Entrega', 
    cpf: "09480379970",
    description: "Samsung Galaxy A10",
    value: 849.99,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 1,
    img: imgProductSmartphone,
    tipo: "op_recebidas",
    message: "Olá" },
  item = {
    id: Math.random(),
    avaliation: 1,
    option: 'Avaliar Compra', 
    cpf: "09480379970",
    description: "Samsung Galaxy A10",
    value: 849.99,
    client: "Fabiano Mello",
    data: "03/05/20",
    ativo: 1,
    img: imgProductSmartphone,
    tipo: "op_recebidas",
    message: "Olá" },  
  item = {
    id: Math.random(),
    avaliation: 1,
    option: 'Avaliar Compra', 
    cpf: "09480379970",
    description: "Notebook Samsung Essentials E20",
    value: 1936.08,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 1,
    img: imgProductNotebook,
    tipo: "op_recebidas",
    message: "Olá" },
  item = {
    id: Math.random(),
    avaliation: 0,
    option: 'Produto Avaliado', 
    cpf: "09480379970",
    description: "Aspirador Pó Philco Ph1100",
    value: 149.99,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 0,
    img: imgProductAspirador,
    tipo: "op_recebidas",
    message: "Olá" },
  item = {
    id: Math.random(),
    avaliation: 1,
    option: 'Avaliar Compra', 
    cpf: "09480379970",
    description: "Lavadora de Roupas Brastemp 12Kg",
    value: 1549.99 ,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 1,
    img: imgProductLavadora,
    tipo: "op_recebidas",
    message: "Olá" },
  item = {
    id: Math.random(),
    avaliation: 1,
    option: 'Avaliar Compra', 
    cpf: "09480379970",
    description: "Samsung Galaxy A10",
    value: 849.99,
    client: "Fabiano Mello",
    data: "03/05/20",
    ativo: 1,
    img: imgProductSmartphone,
    tipo: "op_efetuadas",
    message: "Olá" },  
  item = {
    id: Math.random(),
    avaliation: 0,
    option: 'Produto Avaliado',
    cpf: "09480379970",
    description: "Aspirador Pó Philco Ph1100",
    value: 149.99,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 0,
    img: imgProductAspirador,
    tipo: "op_efetuadas",
    message: "Olá" },
  item = {
    id: Math.random(),
    avaliation: 0,
    option: 'Retirar em Loja', 
    cpf: "09480379970",
    description: "Lavadora de Roupas Brastemp 12Kg",
    value: 1549.99 ,
    client: "Everton Ferreira",
    data: "03/05/20",
    ativo: 1,
    img: imgProductLavadora,
    tipo: "op_efetuadas",
    message: "Olá" },
  ];


  

import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';


export const rank = [
  item = 
  {
    id: Math.random(),
    lib: Ionicons,
    icon: "md-appstore",
    title: "4º Lugar | Larissa Motta",
    data: "03/03/2020",
    value: -380.00,
    color: '#F57921',
    img: user1,
  },
  item = 
  {
    id: Math.random(),
    lib: MaterialIcons,
    icon: "local-grocery-store",
    title: "3º Lugar | Lucas Silva",
    data: "15/03/2020",
    value: -175.00,
    color: '#F57921',
    img: user2,
  },
  item = 
  {
    id: Math.random(),
    lib: AntDesign,
    icon: "creditcard",
    title: "2º Lugar | Pedro Henrique",
    data: "15/03/2020",
    value: +80.00,
    color: '#FFF',
    img: user3,
  },
  item = 
  {
    id: Math.random(),
    lib: Ionicons,
    icon: "md-appstore",
    title: "1º Lugar | Maria Silveira",
    data: "15/03/2020",
    value: -2380.00,
    color: '#F57921',
    img: user4,
  },
];
