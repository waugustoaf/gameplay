import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${props => props.theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
