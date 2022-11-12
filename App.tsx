import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { theme } from './src/assets/theme';

import { ThemeProvider } from 'styled-components';
import { Restaurants } from './src/features/restaurants/screens/Restaurants';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Restaurants />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
