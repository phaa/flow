import React from 'react';
import { useTheme } from 'styled-components/native';

import { Filter } from '../Filter';
import { Container, Title, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
}

export function Filters({ onFilter }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Title>Filtre pelo status dos formulários</Title>

      <Options>
        <Filter
          title="Pendente"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() => onFilter('pending')}
        />

        <Filter
          title="Finalizado"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() => onFilter('finished')}
        />
      </Options>
    </Container>
  );
}