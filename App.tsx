import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Background } from './src/components/Background';
import { CustomThemeProvider, theme } from './src/globals/styles/theme';
import { Routes } from './src/routes/intex';

export default function App() {
  const [isFontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <CustomThemeProvider>
          <Routes />
        </CustomThemeProvider>
        <StatusBar backgroundColor={theme.colors.secondary80} style='auto' />
      </Background>
    </SafeAreaView>
  );
}
