import React from "react";
import { Text, SafeAreaView, Image } from "react-native";

export default function ComponenteSafeareaView() {
    return (
        <SafeAreaView>
            <Text>Testando o SafeAreaView! </Text>
            <Text>Ajusta o contéudo na tela evitando que saia dos limites</Text>
            <Image
                source={require('../assets/imagens/imagem home studio Aldenor Neto.jpg')}
            />
        </SafeAreaView>
    )
}