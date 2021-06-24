import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png';
import { Container, Icon, IconWrapper, Title } from './styles';

interface ButtonIconProps extends Omit<RectButtonProps, 'style'> {
  title: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  );
};
