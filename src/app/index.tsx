import { View, Text, Button } from 'react-native';

export default function App() {


    return (
        <View>
            <Text>OLA, APP!</Text>
            <Button title="clique aqui !" onPress={() => alert("clicado")}/>
        </View>
    )

}
