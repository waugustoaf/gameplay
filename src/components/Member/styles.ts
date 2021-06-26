import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
  font-size: 18px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 4px;
`;

export const NameStatus = styled.Text`
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.highlight};
  font-size: 13px;
`;
