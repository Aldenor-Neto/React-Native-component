import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HelloWord from './componentes/HelloWord';
import DimensoesFixas from './componentes/DimensoesFixas';
import ChecaNumero from './componentes/ChecaNumero';
import Evento from './componentes/Evento';

export default function App() {
  return (
    <View style={styles.container}>
      {/* inicio dos estudo props, style e text
      <DimensoesFixas></DimensoesFixas>
      <HelloWord nome='Aldenor' />
Condicional, ternario e função em componentes
      <ChecaNumero numero='11'></ChecaNumero>
      */}
      <Evento></Evento>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
