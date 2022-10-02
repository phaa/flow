import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';

export const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent backgroundColor={theme.COLORS.BACKGROUND} />
      <Routes />
    </ThemeProvider>
  );
};

export default AppWrapper;
