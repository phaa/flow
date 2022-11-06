import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { PressableProps } from 'react-native';
import moment from 'moment';

import {
  Container,
  Status,
  Content,
  Header,
  Title,
  Label,
  Info,
  Footer,
  FormStyleProps
} from './styles';

export type FormItemProps = FormStyleProps & {
  id: string;
  description: string;
  questionCount: number;
  status: string;
  createdAt: Date;
  userId: string;
};

type Props = PressableProps & {
  form: FormItemProps;
};
 
export const FormCard: React.FC<Props> = ({ form, ...rest }) => {
  
  const theme = useTheme();
  
  return (
    <Container>
      <Status status={form.status} />

      <Content>
        <Header>
          <Title>{form.description}</Title>
          <MaterialIcons
            name={form.status === "pending" ? "hourglass-empty" : "cloud-done"}
            size={26}
            color={form.status === "pending" ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {
                moment(form.createdAt).format("DD/MM - HH:MM")
              }
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="assignment" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {form.questionCount} questões
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );    
}
