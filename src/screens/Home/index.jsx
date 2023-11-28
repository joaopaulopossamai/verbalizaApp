import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHome}>Verbaliza</Text>
      <Text style={styles.apresentacao}>
        Bem vindo ao {'\n'} Verbaliza {'\n'} Aqui você transforma {'\n'} texto em áudio
      </Text>
      <TouchableOpacity style={styles.buttonHome} onPress={() => navigation.navigate('Results')}>
        <Text style={styles.textButton}>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
}
