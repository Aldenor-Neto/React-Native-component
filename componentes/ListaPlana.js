import react from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListaPlana() {

    const produtos = [
        { id: '001', produto: ['Mouse', '42.50'] },
        { id: '002', produto: ['teclado', '174.99'] },
        { id: '003', produto: ['Monitor', '435.00'] },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Estudando Lista Plana - FlatList</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.text}>Produto: {item.produto[0]} - Valor R$ {item.produto[1]}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    texto: {
        color: 'white',
        fontSize: 22
    },
    text: {
        color: 'yellow',
        fontSize: 15,
    }
})