import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {


    return (
        
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.title}>OLA, APP!</Text>
            <TouchableOpacity onPress={() => alert("clicado")}style={styles.button}>   
                <Text>clique aqui !</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container : {
        flex: 1,    
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },

    title : {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 20,

    },

    button : {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
