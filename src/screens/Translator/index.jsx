import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Translator({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textoTranslaitor}>TOCANDO...</Text>
      <View>
        <Text style={styles.textoTocando}>AUDIO TOCANDO</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonVoltar} onPress={() => navigation.goBack()}>
          <Text style={styles.textoVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
