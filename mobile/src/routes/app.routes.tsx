import React from 'react';
import Dashboard from '../pages/Dashboard';

import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{headerShown: false}}
    />
  </AppStack.Navigator>
);

export default AppRoutes;
