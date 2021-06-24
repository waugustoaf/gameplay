import React from 'react';
import { View } from 'react-native';
import { Container, Greeting, Message, User, Username } from './styles';
import { Avatar } from '../Avatar';

export const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar urlAvatar="https://github.com/waugustoaf.png" />

      <View>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Walther</Username>
        </User>

        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
};
