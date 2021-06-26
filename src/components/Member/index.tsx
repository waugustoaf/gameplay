import React from 'react';
import { View } from 'react-native';
import { Member as MemberItemProps } from '../../dtos/Member';
import { theme } from '../../globals/styles/theme';
import { Avatar } from '../Avatar';
import { BulletStatus, Container, NameStatus, Status, Title } from './styles';

interface MemberProps {
  member: MemberItemProps;
}

export const Member: React.FC<MemberProps> = ({
  member: { avatar_url, username, status },
}) => {
  const isMemberOnline = status === 'online';
  const { on, primary } = theme.colors;

  return (
    <Container>
      <Avatar urlAvatar={avatar_url} />

      <View>
        <Title>{username}</Title>

        <Status>
          <BulletStatus
            style={{ backgroundColor: isMemberOnline ? on : primary }}
          />

          <NameStatus>{isMemberOnline ? 'Disponível' : 'Ocupado'}</NameStatus>
        </Status>
      </View>
    </Container>
  );
};
