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
      <Title>Filtre pelas datas dos formulários</Title>

      <Options>
        <Filter
          title="Ascendente"
          backgroundColor={theme.COLORS.PRIMARY}
          onPress={() => onFilter('open')}
        />

        <Filter
          title="Decrescente"
          backgroundColor={theme.COLORS.SECONDARY}
          onPress={() => onFilter('closed')}
        />
      </Options>
    </Container>
  );
}