import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { TodosContextProvider } from './src/hooks/useTodos';
import AppNavigation from './src/navigation/AppNavigation';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <TodosContextProvider>
      <StatusBar style="light" />
      <AppNavigation />
      {children}
    </TodosContextProvider>
  );
}
