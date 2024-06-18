import react, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class StateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ligado: false
        }
    }

    render(props) {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>{this.state.ligado ? 'O carro está ligado' : 'O carro está desligado'}</Text>
                <Button
                    title={this.state.ligado ? 'Desligar' : 'Ligar'}
                    onPress={() => { this.setState({ ligado: !this.state.ligado }) }}
                    style={styles.botão}
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFF',
        fontSize: 25,
    },
    botão: {
        backgroundColor: '#cfe2f3',
        color: '#000',
        borderRadius: 5,
        padding: 10,
    }

});
