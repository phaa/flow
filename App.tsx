import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';
import { SafeAreaView } from 'react-native';

export const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar style="dark" translucent />

      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>

    </ThemeProvider>
  );
};

export default AppWrapper;
