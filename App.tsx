import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { CustomThemeProvider } from './src/globals/styles/theme';
import { SignIn } from './src/pages/SignIn';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomThemeProvider>
        <SignIn />
      </CustomThemeProvider>
      <StatusBar backgroundColor='#0d133d' style='auto' />
    </SafeAreaView>
  );
}
