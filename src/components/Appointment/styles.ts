import styled from 'styled-components/native';

interface PlayersProps {
  isOwner?: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
  font-size: 18px;
`;

export const CategoryText = styled.Text`
  font-family: ${props => props.theme.fonts.title500};
  color: ${props => props.theme.colors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.heading};
  font-size: 13px;
  margin-left: 7px;
`;

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Player = styled.Text<PlayersProps>`
  font-family: ${props => props.theme.fonts.text500};
  color: ${props => props.theme.colors.highlight};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;
