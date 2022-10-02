import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewForm } from '../screens/NewForm';
import { Form1 } from '../screens/Tests';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="form1" component={Form1} />
      <Screen name="new" component={NewForm} />
    </Navigator>
  );
}