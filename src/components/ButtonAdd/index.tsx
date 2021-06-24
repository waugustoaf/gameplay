import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../globals/styles/theme';

export const ButtonAdd: React.FC<RectButtonProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name='plus'
        size={24}
        color={theme.colors.heading}
      />
    </Container>
  );
};
