import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function QRCode() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('Product');
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={[StyleSheet.absoluteFill, styles.container]}>
      <Text style={styles.description}>
        Posicione o QR Code abaixo e aguarde a leitura automática.
      </Text>
      <View style={styles.layerTop} />
      <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
      </View>
      <View style={styles.layerBottom} />
    </BarCodeScanner>
  );
}

const whiteColor = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: whiteColor,
  },
  description: {
    flex: 2,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    marginTop: '10%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: whiteColor,
  },
  layerCenter: {
    flex: 5,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  focused: {
    flex: 5,
  },
  layerRight: {
    flex: 1,
    backgroundColor: whiteColor,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: whiteColor,
  },
});
