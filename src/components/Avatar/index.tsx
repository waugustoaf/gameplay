import React from 'react';
import { theme } from '../../globals/styles/theme';
import { AvatarImage, Container } from './styles';

interface AvatarProps {
  urlAvatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({urlAvatar}) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Container colors={[secondary80, secondary100]}>
      <AvatarImage source={{ uri: urlAvatar }} />
    </Container>
  );
};
