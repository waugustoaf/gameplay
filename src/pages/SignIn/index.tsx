import { useNavigation } from '@react-navigation/native';
import React from 'react';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Content, Logo, Subtitle, Title } from './styles';

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Logo source={IllustrationImg} resizeMode='stretch' />

      <Content>
        <Title>
          Conecte-se {'\n'}e organize suas{'\n'}
          jogatinas
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon title='Entrar com discord' onPress={handleSignIn} />
      </Content>
    </Container>
  );
};
