import React from 'react';
import { View } from 'react-native';

class DimensoesFixas extends React.Component {
    render() {
        return (
            <View style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'   }}>
                {/* Primeira Caixa - Azul Celeste */}
                <View
                    style={{
                        width: 56,
                        height: 56,
                        backgroundColor: 'skyblue',
                    }}
                />

                {/* Segunda Caixa - Azul Escuro */}
                <View
                    style={{
                        width: 160,
                        height: 160,
                        backgroundColor: 'steelblue',
                    }}
                />

                {/* Terceira Caixa - Azul Claro */}
                <View
                    style={{
                        width: 150,
                        height: 70,
                        backgroundColor: 'powderblue',
                    }}
                />
            </View>
        );
    }
}

export default DimensoesFixas;
