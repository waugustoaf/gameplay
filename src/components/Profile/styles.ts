import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${props => props.theme.fonts.title500};
  font-size: 24px;
  color: ${props => props.theme.colors.heading};
  margin-right: 6px;
`;

export const Username = styled.Text`
  font-family: ${props => props.theme.fonts.title700};
  font-size: 24px;
  color: ${props => props.theme.colors.heading};
`;

export const Message = styled.Text`
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.highlight};
`;
