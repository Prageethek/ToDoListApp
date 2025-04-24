//src/store/TaskStore.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

export interface Task {
  id: string;
  title: string;
  body: string;
}

interface TaskState {
  tasks: Task[];
  addTask: (title: string, body: string) => void;
  removeTask: (id: string) => void;
  loadTasks: () => void;
  updateTask: (id: string, title: string, body: string) => void;
}

const TASK_STORAGE_KEY = 'TASKS';

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],

  addTask: async (title, body) => {
    const newTask: Task = { id: Date.now().toString(), title, body };
    const updatedTasks = [newTask, ...get().tasks];
    set({ tasks: updatedTasks });
    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
  },

  removeTask: async (id: string) => {
    const updatedTasks = get().tasks.filter(t => t.id !== id);
    set({ tasks: updatedTasks });
    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
  },

  loadTasks: async () => {
    const stored = await AsyncStorage.getItem(TASK_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      set({ tasks: parsed });
    }
  },

  updateTask: async (id, title, body) => {
    const updatedTasks = get().tasks.map(task =>
      task.id === id ? { ...task, title, body } : task
    );
    set({ tasks: updatedTasks });
    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
  },
}));
