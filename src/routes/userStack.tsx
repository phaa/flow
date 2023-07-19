import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { NewForm } from '../screens/NewForm';
import { FormTest } from '../screens/Tests/';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStack() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="home" component={Home} />
      <Screen name="formtest" component={FormTest} options={{
        title: `Novo Formulário`,
        headerShown: true,
        headerStyle: { backgroundColor: theme.COLORS.PRIMARY, },
        headerTintColor: theme.COLORS.WHITE,
        headerTitleStyle: { fontWeight: 'bold', }
      }} />
      <Screen name="new" component={NewForm} options={{ title: 'Novo formulário' }} />
    </Navigator>
  );
}