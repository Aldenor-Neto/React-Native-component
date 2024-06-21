import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import HelloWord from './componentes/HelloWord';
import DimensoesFixas from './componentes/DimensoesFixas';
import ChecaNumero from './componentes/ChecaNumero';
import Evento from './componentes/Evento';
import ComponenteImagem from './componentes/ComponenteImagem';
import Botoes from './componentes/Botoes';
import ListaPlana from './componentes/ListaPlana';
import ImagemBG from './componentes/ImagemBG';
import StateFunction from './componentes/StateFunction';
import StateClass from './componentes/StateClass';
import ComponenteSafeareaView from './componentes/ComponenteSafeAreaView';
import ComponenteSwitch from './componentes/ComponenteShitch';
import Rolagem from './componentes/RolagemScrollView';
import Toque from './componentes/ToqueTouchable';

export default function App() {
  return (
    <View style={styles.container}>
      <Toque />
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
