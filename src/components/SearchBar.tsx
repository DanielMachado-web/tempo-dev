import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

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

        <View>
            <View>
                <TextInput
                    placeholder="Digite o nome da cidade"
                    autoCapitalize="words"
                    autoCorrect={false}
                    editable={!loading}
                    onSubmitEditing={() => handleSearch()}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor="#999"
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        fontSize: 16,
                        color: '#333',
                        marginBottom: 10,
                    }}                 

                />

                <TouchableOpacity onPress={handleSearch} disabled={loading}>
                    <Text>{loading ? 'Carregando...' : 'Buscar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
