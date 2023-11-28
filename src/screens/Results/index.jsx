import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import { Audio } from 'expo-av';
import axios from 'axios';
import { styles } from './styles';

export default function Results({ navigation }) {
  const [inputValue, setInputValue] = useState('');

  const textoParaAudio = async (texto) => {
    try {
      const response = await axios.post(
        'https://texttospeech.googleapis.com/v1/text:synthesize',
        {
          input: { text: texto },
          voice: {
            languageCode: 'pt-BR',
            name: 'pt-BR-Standard-A',
            ssmlGender: 'NEUTRAL',
          },
          audioConfig: { audioEncoding: 'MP3' },
        },
        {
          params: {
            key: 'AIzaSyBUST0SUOQryxUpvOYXelet7uUd1oG4yOE',
          },
        }
      );

      const { sound } = await Audio.Sound.createAsync({ uri: `data:audio/mp3;base64,${response.data.audioContent}` }, { shouldPlay: true });

      await sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          navigation.navigate('NovaTela');
        }
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erro Axios:', error.response?.data || error.message);
      } else {
        console.error('Erro na solicitação Text-to-Speech:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textCard}>
        <Text style={styles.textinput}>Escreva seu texto aqui</Text>
      </View>

      <View style={styles.containerBaixo}>
        <TextInput style={styles.input} placeholder='Digite aqui...' onChangeText={(text) => setInputValue(text)} value={inputValue} />
      </View>

      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.voltar} onPress={() => textoParaAudio(inputValue)}>
        <Text>Reproduzir</Text>
      </TouchableOpacity>
    </View>
  );
}
