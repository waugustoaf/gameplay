import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import CalendarSvg from '../../assets/calendar.svg';
import PlayerSVG from '../../assets/player.svg';
import { Appointment as AppointmentDTO } from '../../dtos/Appointment';
import { theme } from '../../globals/styles/theme';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import {
  CategoryText,
  Container,
  Content,
  Date,
  DateInfo,
  Footer,
  Header,
  PlayerInfo,
  Player,
  Title,
} from './styles';

interface AppointmentProps extends RectButtonProps {
  data: AppointmentDTO;
}

export const Appointment: React.FC<AppointmentProps> = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />

        <Content>
          <Header>
            <Title>{data.guild.name}</Title>

            <CategoryText>{category.title}</CategoryText>
          </Header>

          <Footer>
            <DateInfo>
              <CalendarSvg />

              <Date>{data.date}</Date>
            </DateInfo>

            <PlayerInfo>
              <PlayerSVG fill={owner ? primary : on} />

              <Player isOwner={owner}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Player>
            </PlayerInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
};
