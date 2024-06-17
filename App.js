import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import HelloWord from './componentes/HelloWord';
import DimensoesFixas from './componentes/DimensoesFixas';
import ChecaNumero from './componentes/ChecaNumero';
import Evento from './componentes/Evento';
import ComponenteImagem from './componentes/ComponenteImagem';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponenteImagem></ComponenteImagem>
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
