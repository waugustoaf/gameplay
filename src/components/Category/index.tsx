import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../globals/styles/theme';
import { Container, Content, Item, Title } from './styles';

interface CategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  checked = true,
  ...rest
}) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <Container {...rest}>
      <LinearGradient colors={[secondary80, secondary100]}>
        <Content checked={checked}>
          <Item checked={checked} />

          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </LinearGradient>
    </Container>
  );
};
