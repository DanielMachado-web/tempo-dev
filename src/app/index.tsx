import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeStyles } from '../styles/home.styles';


export default function App() {


    return (

        <SafeAreaView style={homeStyles.safeArea}>

            <StatusBar barStyle="dark-content" />

            <View style={homeStyles.header}>
                <Text style={homeStyles.title}>TEMPO DEV</Text>
                <Text style={homeStyles.subtitle}>Busque o clima em qualquer cidade</Text>
            </View>


            <View>
                <Text>clique aqui !</Text>
            </View>

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffff',
        marginBottom: 20,

    },

    button: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
