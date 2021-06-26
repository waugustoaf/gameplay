import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 104px;
  padding: 0 24px;
  padding-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${props => props.theme.fonts.title700};
  font-size: 20px;
  color: ${props => props.theme.colors.heading};
`;

export const Action = styled.View``;
