import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Profile } from '../../components/Profile';
import { Appointment as AppointmentDTO } from '../../dtos/Appointment';
import { AppointmentList, Container, Content, Header } from './styles';

export const Home: React.FC = () => {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: undefined,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20h40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ] as AppointmentDTO[];

  const handleCategorySelect = useCallback(
    (categoryID: string) => {
      categoryID === category ? setCategory('') : setCategory(categoryID);
    },
    [category],
  );

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

      <CategorySelect
        categorySelected={category}
        changeCategory={handleCategorySelect}
      />

      <Content>
        <ListHeader
          title='Partidas agendadas'
          subtitle={`Total ${appointments.length}`}
        />
        <AppointmentList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </Content>
    </Container>
  );
};
