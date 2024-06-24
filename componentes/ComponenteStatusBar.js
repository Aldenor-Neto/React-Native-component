import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';

export default function ComponenteStatusBar(){
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
  