import React from 'react';

import AppContainer from './src/components/AppContainer';
import { TodosContextProvider } from './src/hooks/useTodos';
import AppNavigation from './src/navigation/AppNavigation';

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <TodosContextProvider>
      <AppNavigation />
      <AppContainer>{children}</AppContainer>
    </TodosContextProvider>
  );
}
