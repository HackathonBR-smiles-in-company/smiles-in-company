import React from 'react';
import Routes from './src/routes';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

console.disableYellowBox = true;

export default function App() {
  return <Routes />;
}
