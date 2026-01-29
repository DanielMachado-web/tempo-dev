import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {


    return (
        <View>
            <Text>OLA, APP!</Text>
            <TouchableOpacity onPress={() => alert("clicado")}>
                <Text>clique aqui !</Text>
            </TouchableOpacity>
        </View>
    )

}
