import 'react-native-gesture-handler';

import React from 'react';

import { TodosContextProvider } from './src/hooks/useTodos';
import AppNavigation from './src/navigation/AppNavigation';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <TodosContextProvider>
      <AppNavigation />
      {children}
    </TodosContextProvider>
  );
}
