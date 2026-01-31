import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { searchBarStyles } from '../styles/searchbar.styles';

interface SearchBarProps {

    onSearch?: (cityName: string) => void;
    loading?: boolean;

}



export default function SearchBar({ onSearch, loading = false }: SearchBarProps) {

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(searchText);
    }
    return (

        <View style={searchBarStyles.container}>
            <View style={searchBarStyles.inputContainer}>
                <TextInput
                    placeholder="Digite o nome da cidade"
                    autoCapitalize="words"
                    autoCorrect={false}
                    editable={!loading}
                    onSubmitEditing={() => handleSearch()}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor="#999"
                    style={searchBarStyles.input}              
                                    
                />

                <TouchableOpacity onPress={handleSearch} disabled={loading} style={searchBarStyles.button}>
                    <Text style={searchBarStyles.buttonText}>{loading ? 'Carregando...' : 'Buscar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
