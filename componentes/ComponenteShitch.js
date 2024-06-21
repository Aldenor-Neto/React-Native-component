import react from "react";
import { Text, View, Switch } from "react-native";
import { useState } from "react";

export default function ComponenteSwitch() {

    const [ligado, setLigado] = useState(true);

    return (
        <View>
            <Text style={{ color: 'white' }}>Testando o componente Switch!</Text>
            <Text style={{ color: 'yellow' }}>Click no botão para auternar o estado do carro.</Text>
            <Switch
                value={ligado}
                onValueChange={() => { setLigado(!ligado); }}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={ligado ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
            />
            <Text style={{ color: '#f0f', fontSize: 22 }}> O Carro esta {ligado ? 'ligado' : 'Desligado'}</Text>
        </View>
    )
}