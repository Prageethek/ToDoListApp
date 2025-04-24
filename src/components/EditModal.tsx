// src/components/EditModal.tsx

import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Task, useTaskStore} from '../store/taskStore';

interface Props {
  task: Task;
  onClose: () => void;
}

export default function EditModal({task, onClose}: Props) {
  const [title, setTitle] = useState(task.title);
  const [body, setBody] = useState(task.body);
  const updateTask = useTaskStore(state => state.updateTask);

  const onSave = () => {
    updateTask(task.id, title, body);
    onClose();
  };

  return (
    <Modal transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title..."
            placeholderTextColor="#F0E3CA"
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            value={body}
            onChangeText={setBody}
            placeholder="Enter description..."
            placeholderTextColor="#F0E3CA"
            multiline
          />

          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    minHeight: 320,
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    borderColor: '#FF8303',
    borderWidth: 1,
  },
  label: {
    color: '#FF8303',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF8303',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#FF8303',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderColor: '#FF8303',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F0E3CA',
    fontWeight: 'bold',
  },
});
