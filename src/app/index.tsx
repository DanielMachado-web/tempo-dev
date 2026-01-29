import { View, Text, TouchableOpacity } from 'react-native';

export default function App() {


    return (
        <View>
            <Text>OLA, APP!</Text>
            <TouchableOpacity onPress={() => alert("clicado")}
                style={{ backgroundColor: 'blue', padding: 10, marginTop: 10 , borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}
                >
                <Text>clique aqui !</Text>
            </TouchableOpacity>
        </View>
    )

}
