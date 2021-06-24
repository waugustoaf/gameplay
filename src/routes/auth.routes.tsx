import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName='Home'
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
    </Navigator>
  );
};
