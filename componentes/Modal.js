import react from "react";
import { useState } from "react";
import { Text, View, Modal, StyleSheet, Button } from "react-native";

export default function ComponenteModal() {

    const [ativo, setAtivo] = useState(false);

    return (
        <View style={styles.container}>
            <Button
                title="Modal"
                onPress={() => { setAtivo(true) }}
                styles={styles.botao}
            ></Button>
            <Modal
                visible={ativo}
                animationType="slide"
                onRequestClose={() => { setAtivo(false) }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.texto}>O modal está aberto!</Text>
                        <Button
                            title="Fechar"
                            onPress={() => { setAtivo(false); }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao: {
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        fontSize: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    texto: {
        color: '#f0f',
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
});