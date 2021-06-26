import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../globals/styles/theme';
import { Action, Container, Title } from './styles';

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title, children }) => {
  const navigation = useNavigation();

  const { secondary100, secondary80, heading } = theme.colors;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container colors={[secondary100, secondary80]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name='arrow-left' size={20} color={heading} />
      </BorderlessButton>

      <Title>{title}</Title>

      {!!children && <Action>{children}</Action>}
    </Container>
  );
};
