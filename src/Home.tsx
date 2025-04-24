//src/Home.tsx

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import {useTaskStore} from './store/taskStore'; // Import the store

export default function Home() {
  const loadTasks = useTaskStore(state => state.loadTasks); // Get the loadTasks function

  useEffect(() => {
    // Load tasks when component mounts
    loadTasks();
  }, [loadTasks]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TaskInput />
      <TaskList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#111'},
});
