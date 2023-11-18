import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';
import { SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export const AppWrapper: React.FC = () => {

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('transparent');
  }, []);

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
