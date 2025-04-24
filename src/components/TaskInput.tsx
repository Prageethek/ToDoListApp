//src/components/TaskInput.tsx

import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useTaskStore} from '../store/taskStore';

export default function TaskInput() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addTask = useTaskStore(state => state.addTask);

  const onAdd = () => {
    if (!title.trim()) return;
    addTask(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Title..."
          placeholderTextColor="#F0E3CA"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="About..."
          placeholderTextColor="#F0E3CA"
          value={body}
          onChangeText={setBody}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Icon name="plus" size={32} color="#FF8303" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', margin: 16},
  inputs: {flex: 1, marginRight: 8},
  input: {
    borderWidth: 1,
    borderColor: '#FF8303',
    borderRadius: 8,
    padding: 8,
    color: '#F0E3CA',
    marginBottom: 8,
  },
  button: {
    width: 80,
    height: 84,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF8303',
    borderRadius: 8,
  },
  
});


