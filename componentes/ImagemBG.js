import react from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

export default function ImagemBG() {
    return (
        <View style={styles.container} >
            <ImageBackground
                source={require('../assets/imagens/imagem kenosis.jpeg')}
                resizeMode="contain"
                alt="Fundo da tela com imagem Kênosis"
                style={styles.imagemFundo}
            >
                <Text>testando BackGround com uma imagem</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemFundo: {
        width: '100%',
        height: '100%',
    },
})
