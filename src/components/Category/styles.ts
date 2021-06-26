import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

interface CheckedProps {
  checked?: boolean;
}

export const Container = styled(RectButton)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled(LinearGradient)<CheckedProps>`
  opacity: ${props => (props.checked ? 1 : 0.5)};
  width: 100px;
  height: 116px;
  justify-content: space-between;
  border-radius: 8px;
  align-items: center;
  padding: 20px 0;
`;

export const Item = styled.View<CheckedProps>`
  width: ${props => (props.checked ? '10' : '12')}px;
  height: ${props => (props.checked ? '10' : '12')}px;
  position: absolute;
  top: 7px;
  right: 7px;

  background-color: ${props =>
    props.checked
      ? props.theme.colors.primary
      : props.theme.colors.secondary100};

  ${props =>
    !props.checked &&
    css`
      border-bottom-color: ${props => props.theme.colors.secondary50};
      border-width: 2px;
      border-radius: 3px;
    `}
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
  font-size: 15px;
`;
