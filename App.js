import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Generate from './screens/Generate';
import Stencil from './screens/Stencil';
import Preview3D from './screens/Preview3D';
import Account from './screens/Account';
import Paywall from './screens/Paywall';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Generate" component={Generate} />
        <Stack.Screen name="Stencil" component={Stencil} />
        <Stack.Screen name="Preview3D" component={Preview3D} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Paywall" component={Paywall} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;