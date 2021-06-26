import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../globals/styles/theme';
import { BackImg, Container, FooterButtonContainer, MemberList, SubTitle, Title } from './styles';
import { Fontisto } from '@expo/vector-icons';
import bannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Member as MemberProps } from '../../dtos/Member';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export const AppointmentDetails: React.FC = () => {
  const { secondary100, primary } = theme.colors;
  const members = [
    {
      id: '1',
      username: 'waugustoaf',
      avatar_url: 'https://github.com/waugustoaf.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'waugustoaf',
      avatar_url: 'https://github.com/waugustoaf.png',
      status: 'offline',
    },
    {
      id: '3',
      username: 'waugustoaf',
      avatar_url: 'https://github.com/waugustoaf.png',
      status: 'online',
    },
  ] as MemberProps[];

  return (
    <Background>
      <StatusBar backgroundColor={secondary100} />
      <Container>
        <Header title='Detalhes'>
          <BorderlessButton>
            <Fontisto name='share' size={24} color={primary} />
          </BorderlessButton>
        </Header>

        <BackImg source={bannerImg} resizeMode='cover'>
          <Title>Lendários</Title>

          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da MD10
          </SubTitle>
        </BackImg>

        <ListHeader title='Jogadores' subtitle={`Total ${members.length}`} />

        <MemberList
          data={members}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Member member={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />

        <FooterButtonContainer>
          <ButtonIcon title='Entrar na partida' />
        </FooterButtonContainer>
      </Container>
    </Background>
  );
};
