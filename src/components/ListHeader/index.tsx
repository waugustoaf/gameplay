import React from 'react';
import { Container, SubTitle, Title } from './styles';

interface ListHeaderProps {
  title: string;
  subtitle: string;
}

export const ListHeader: React.FC<ListHeaderProps> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};
