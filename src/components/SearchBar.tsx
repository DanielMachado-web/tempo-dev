import { View,  TextInput } from 'react-native';

interface SearchBarProps {

    onSearch: (cityName: string) => void;
    loading: boolean;

}



export default function SearchBar({ onSearch, loading = false }: SearchBarProps) {
    return (

        <View>
            <View>
                <TextInput placeholder="Digite o nome da cidade" style={{ borderWidth: 1, borderColor: '#000', padding: 10, borderRadius: 5 }} />
            </View>
        </View>
    );
}
