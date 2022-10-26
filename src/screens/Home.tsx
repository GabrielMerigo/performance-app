import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';
import { FriendsList } from '../components/FriendsList';

export function Home() {
  const [name, setName] = useState('');

  function handleSearch() { }

  return (
    <View style={styles.container}>
      <Text>Amigos</Text>

      <TextInput
        placeholder="Nome do Cliente"
        onChangeText={setName}
        style={styles.input}
      />

      <Button
        title="Buscar"
        onPress={handleSearch}
      />

      <FriendsList data={[]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10
  }
})