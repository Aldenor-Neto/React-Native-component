import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';

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
import ComponenteModal from './componentes/Modal';

export default function App() {

const [cor, setCor] = useState('white');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={cor} />

      <Text style={styles.texto}>Estudando StatusBar!</Text>
      <Text style={styles.texto}>escolha a cor da barra</Text>

      <View>
        <Button
        title='Vermelho'
        onPress={() => {setCor('red')}}
        />
        <Button
        title='Verde'
        onPress={() => {setCor('green')}}
        />
        <Button
        title='Azul'
        onPress={() => {setCor('blue')}}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 25
  }
});
