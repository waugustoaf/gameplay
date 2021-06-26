import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Member } from '../../dtos/Member';

export const Container = styled.View`
  flex: 1;
`;

export const BackImg = styled.ImageBackground`
  width: 100%;
  height: 234px;
  justify-content: flex-end;
  padding: 0 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${props => props.theme.fonts.title700};
  color: ${props => props.theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${props => props.theme.fonts.text400};
  color: ${props => props.theme.colors.heading};
  margin-bottom: 30px;
`;

export const MemberList = styled(FlatList as new () => FlatList<Member>)`
  margin: 27px 0 0 24px;
  flex: 1;
`;

export const FooterButtonContainer = styled.View`
  padding: 20px 24px;
  margin: ${getBottomSpace()}px;
`;
