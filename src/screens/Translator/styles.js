import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbd3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoTranslaitor: {
    color: '#000',
    fontSize: 24,
    height: 46,
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  textoVoltar: {
    marginTop: 2,
    width: 200,
    height: 50,
    fontSize: 30,
    borderRadius: 25,
    borderWidth: 2,
    textAlign: 'center',
  },
  textoTocando: {
    marginTop: '60%',
    width: 350,
    height: 30,
    fontSize: 20,
    borderRadius: 25,
    borderWidth: 2,
    textAlign: 'center',
  },
});

export default styles;
