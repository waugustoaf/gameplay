import React from 'react';
import { Container } from './styles';

export const GuildIcon: React.FC = () => {
  const uri = 'https://img.icons8.com/color/452/discord-logo--v1.png';

  return <Container source={{ uri }} resizeMode='cover' />;
};
