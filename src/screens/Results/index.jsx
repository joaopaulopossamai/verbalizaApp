import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Results({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textCard}>
        <Text style={styles.textinput}> Escreva seu texto aqui</Text>
      </View>

      <View style={styles.containerBaixo}></View>

      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
