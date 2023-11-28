import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import falando from '../../icons/Vector.svg';

export default function Translator({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textoTranslaitor}>TOCANDO...</Text>
      <Image source={falando} style={styles.image} />
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
