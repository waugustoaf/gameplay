import React from 'react';
import { Container, Content, Logo, Subtitle, Title } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo source={IllustrationImg} resizeMode='stretch' />

      <Content>
        <Title>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon title='Entrar com discord' />
      </Content>
    </Container>
  );
};
