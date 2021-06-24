import React from 'react';
import { theme } from '../../globals/styles/theme';
import { Container } from './styles';

export const Background: React.FC = ({ children }) => {
  const { secondary100, secondary80 } = theme.colors;

  return <Container colors={[secondary80, secondary100]}>{children}</Container>;
};
