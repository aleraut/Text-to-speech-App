import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState('');

  const speak = () => {
    if (text) {
      Speech.speak(text);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        multiline
        numberOfLines={4}
        onChangeText={text => setText(text)}
        value={text}
        style={{ borderColor: '#000000', borderWidth: 1, margin: 10, width: 300 }}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
