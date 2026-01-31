import { useState } from 'react';
import { View, TextInput } from 'react-native';

interface SearchBarProps {

    onSearch?: (cityName: string) => void;
    loading?: boolean;

}



export default function SearchBar({ onSearch, loading = false }: SearchBarProps) {

    const [searchText, setSearchText] = useState('');

    return (

        <View>
            <View>
                <TextInput
                    placeholder="Digite o nome da cidade"
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

                    returnKeyType='done'
                    autoCapitalize="words"
                    autoCorrect={false}
                    editable={!loading}
                    onSubmitEditing={() => {
                        if (onSearch && !loading) {
                            onSearch(searchText);
                        }
                    }}
                />
            </View>
        </View>
    );
}
