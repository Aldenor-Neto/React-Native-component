import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default function ComponenteImagem() {
    return (
        <View>
            <View>
                <Text style={styles.texto}>Componente de imagem</Text>
                <Text style={styles.textoSecundario}>Imagem local</Text>
                <Image
                    source={require('../assets/imagens/imagem kenosis.jpeg')}
                    alt="Imagem do programa Kenôsis"
                    style={styles.img}
                />
            </View>
            <View>
                <Text style={styles.textoSecundario}>Imagem da web</Text>
                <Image
                    source={{
                        uri: 'https://cfbcursos.com.br/logoCanal.png',
                    }}
                    alt="Logo do canal de react do YouTube"
                    style={styles.img} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 150,
    },
    texto: {
        fontSize: 20,
        fontFamily: 'arial',
        color: 'white'
    },
    textoSecundario: {
        fontSize: 15,
        color: 'yellow'
    }
})
