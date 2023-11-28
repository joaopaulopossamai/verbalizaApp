import { View, Text} from "react-native";
import * as React from 'react';
import ButtonVerde, { styles } from "./styles";

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <View>
            <Text style={styles.textLogin}>VERBALIZA</Text>
            </View>
            <ButtonVerde onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.textButton}>Entrar</Text>
            </ButtonVerde>
        </View>
    )
}

