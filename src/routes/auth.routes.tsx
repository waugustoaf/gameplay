import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { theme } from '../globals/styles/theme';
import { AppointmentDetails } from '../pages/AppointmentDetails';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
      initialRouteName='AppointmentDetails'
    >
      <Screen name='SignIn' component={SignIn} />
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
    </Navigator>
  );
};
