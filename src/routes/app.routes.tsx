import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { NewOrder } from '../screens/NewOrder';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Form1 } from '../screens/Tests';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="form1" component={Form1} />
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewOrder} />
      
    </Navigator>
  );
}