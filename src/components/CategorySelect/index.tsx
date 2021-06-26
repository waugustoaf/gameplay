import React from 'react';
import { categories } from '../../utils/categories';
import { Category } from '../Category';
import { Container } from './styles';

interface CategorySelectProps {
  categorySelected: string;
  changeCategory: (categoryID: string) => void;
  hasCheckBox?: boolean;
}

export const CategorySelect: React.FC<CategorySelectProps> = ({
  categorySelected,
  changeCategory,
  hasCheckBox = true,
}) => {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => changeCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </Container>
  );
};
