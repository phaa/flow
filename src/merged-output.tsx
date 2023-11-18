// Código fonte do projeto Flow

// Arquivo: index.js
import 'expo-dev-client';
import 'react-native-get-random-values';
import React from 'react';
import { registerRootComponent } from 'expo';
import AppWrapper from './App';

const App = () => <AppWrapper />
registerRootComponent(App);


// Arquivo: App.tsx
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';
import { SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export const AppWrapper: React.FC = () => {

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync('transparent');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      
      <StatusBar style="dark" translucent />

      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>

    </ThemeProvider>
  );
};

export default AppWrapper;


// Arquivo: @types\navigation.d.ts
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
    }
  }
}


// Arquivo: components\AuthHeader\index.tsx
import React from 'react';

import { Container, Title, Logo } from './styles';

type Props = {
  title: string;
};

export function AuthHeader({ title, ...rest }: Props) {
  return (
    <Container>
      <Logo source={require('./logo2_small.png')} />
      <Title>{title}</Title>
    </Container>
  );
}


// Arquivo: components\AuthHeader\styles.ts
import styled from 'styled-components/native';
import { Image } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  align-self: center;
  margin-top: 10px;
`;

export const Logo = styled(Image)`
  position: absolute;
  margin-left: 20px;
`;


// Arquivo: components\BaseComponents\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #21AEEF;
`;

export const RoundContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  flex: 1;
`;

export const Form = styled.View`
  padding: 30px 30px;
  flex: 1;
`;

export const Subtext = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  align-self: center;
  margin-top: 20px;
`;

export const AltSubtext = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-self: center;
  margin-top: 20px;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  justifyContent: flex-end;
`;


//padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;

// Arquivo: components\Button\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}


// Arquivo: components\Button\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``;

// Arquivo: components\Button copy\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function NavButton({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}


// Arquivo: components\Button copy\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 48%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``;

// Arquivo: components\Filter\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, FilterProps } from './styles';

type Props = FilterProps & TouchableOpacityProps & {
  title: string;
}

export function Filter({ title, backgroundColor, ...rest }: Props) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}


// Arquivo: components\Filter\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterProps = {
  backgroundColor: string;
}

export const Container = styled(TouchableOpacity) <FilterProps>`
  flex: 1;  
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

// Arquivo: components\Filters\index.tsx
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

// Arquivo: components\Filters\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-bottom: 16px;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

// Arquivo: components\FloatingButton\index.tsx
import React from 'react';
import ActionButton from 'react-native-action-button';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

//import { Container, Fab } from './styles';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export function FloatingButton({ icon, onPress }: Props) {
  const { COLORS } = useTheme();
  return (
    <ActionButton buttonColor={COLORS.PRIMARY} onPress={onPress} >
        <MaterialIcons
          name={icon}
          size={28}
          color={COLORS.WHITE}
        />
    </ActionButton>  
  )
}

// Arquivo: components\FloatingButton\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  border: 1px solid black;
`;

export const Fab = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// Arquivo: components\FormCard\index.tsx
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
          <Title>Formulário {moment(form.createdAt).format("DD/MM - HH:MM")}</Title>
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
              39 questões
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );    
}


// Arquivo: components\FormCard\styles.ts
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export type FormStyleProps = {
  status: 'pending' | 'finished';
};

export const Container = styled(Pressable)`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<FormStyleProps>`
  width: 11px;
  height: 94px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${({ theme, status }) => status === 'finished' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;

export const MarginLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-right: 3px;
`;

// Arquivo: components\FormControls\CheckBox\index.tsx
import React from 'react';
import { useTheme } from 'styled-components/native';
import BouncyCheckbox, { IBouncyCheckboxProps } from "react-native-bouncy-checkbox";

import { Container } from './styles';

export function CheckBox({...rest }: IBouncyCheckboxProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <BouncyCheckbox
        useNativeDriver={true}
        size={25}
        fillColor={ COLORS.PRIMARY }
        unfillColor={ COLORS.WHITE }
        iconStyle={{ borderRadius: 9, borderColor: COLORS.PRIMARY }}
        textStyle={{
          textDecorationLine: "none",
          color: COLORS.TEXT,
        }}
        {...rest}
      />
    </Container>
  );
}




// Arquivo: components\FormControls\CheckBox\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;



// Arquivo: components\FormControls\CheckBoxGroup\index.tsx
import React from "react";
import { useTheme } from 'styled-components/native';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { Container } from './styles';

type Props = {
  labels: string[];
  onChange: (selectedItem: ICheckboxButton) => void;
};

export function CheckBoxGroup({labels, onChange, ...rest }: Props) {
  const { COLORS } = useTheme();

  const staticData: ICheckboxButton[] = [];

  labels.forEach((label, index) => {
    staticData.push({
      id: index,
      text: label,
      textStyle: { textDecorationLine: "none" },
      fillColor: COLORS.PRIMARY,
      unfillColor: COLORS.PRIMARY_FADED,
      iconStyle: {
        height: 30,
        width: 30,
        borderRadius: 25,
        borderColor: COLORS.WHITE,
      },
      style: { marginTop: 16 },
      iconImageStyle: { height: 15, width: 15 },
    });
  });

  //initial={0}
  return (
    <Container>
      <BouncyCheckboxGroup
        data={staticData}
        onChange={onChange}
        style={{ flexDirection: "column" }}
        {...rest}
      />
    </Container>
  );
}




// Arquivo: components\FormControls\CheckBoxGroup\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;



// Arquivo: components\FormControls\Datepicker\index.tsx
import React, { useState } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Label, DateInputWrapper, DateInput, DateInputText } from './styles';

type Props = TouchableOpacityProps & {
  label: string;
};

export function Datepicker({ label, ...rest }: Props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getFormattedDate = () => {
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <DateInputWrapper onPress={showDatepicker} {...rest}>
        <DateInput>
          <DateInputText>
            {getFormattedDate()}
          </DateInputText>
        </DateInput>
      </DateInputWrapper>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Container>
  );
}

// Arquivo: components\FormControls\Datepicker\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DateInputWrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  
`;

export const DateInput = styled.View`
  flex: 1;  
  justify-content: center;
`;

export const DateInputText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

/**
export const CustomInput = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 14px;
  padding: 0 0;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; */



// Arquivo: components\FormControls\Input\index.tsx
import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input as StyledInput, Label, FeedbackText } from './styles';

type Props = TextInputProps & {
  label?: string;
  feedbackText?: string;
  noInput?: boolean;
};

export function Input({ label, feedbackText, noInput, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...rest} />
      { feedbackText != null && (
        <FeedbackText>{feedbackText}</FeedbackText>
      )}
      
    </Container>
  );
}

export function LoneLabel(props: any) {
  return (
    <Container>
      <Label>{props.label}</Label>
      { props.children }
    </Container>
  );
}

// Arquivo: components\FormControls\Input\styles.ts
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 16px;
  padding: 0 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER2}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; 

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const FeedbackText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// Arquivo: components\FormControls\Slider\index.tsx
import React from 'react';
import { Slider as RawSlider } from '@miblanchard/react-native-slider';
import { useTheme } from 'styled-components/native';

import { CustomStyles3, Container, Caption, Row } from './styles';

type Props = {
  value?: number;
  captions?: string[];
  onValueChange?: (value: number | Array<number>) => void;
};

export function Slider({ value, onValueChange, captions }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>

      <RawSlider
        value={value}
        minimumValue={0}
        maximumValue={captions.length-1}
        step={1}
        trackClickable={false}
        animateTransitions
        minimumTrackTintColor={COLORS.PRIMARY}
        thumbStyle={CustomStyles3.thumb}
        trackStyle={CustomStyles3.track}
        onValueChange={onValueChange}
      />

      <Row>
        {captions.map((caption) => (
          <Caption key={caption.toString()}>{caption}</Caption>
        ))}
      </Row>
      
    </Container>
    
  );
}

// Arquivo: components\FormControls\Slider\styles.ts
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import THEME from '../../../theme/index';

export const CustomStyles3 = StyleSheet.create({
  thumb: {
      backgroundColor: THEME.COLORS.TEXT,
      borderRadius: 60,
      height: 25,
      width: 25,
  },
  track: {
      backgroundColor: THEME.COLORS.BORDER,
      borderRadius: 5,
      height: 10,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Caption = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

// Arquivo: components\FormControls\TextArea\index.tsx
import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return <Container multiline {...rest} />
}

// Arquivo: components\FormControls\TextArea\styles.ts
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

// Arquivo: components\Forms\index.tsx
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

// Firebase Firestore
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Load } from '../Load';
import { Filters } from '../Filters';
import { Container, Header, Title, Counter } from './styles';
import { FormCard } from '../FormCard';
import { FormItemProps } from '../FormCard';

type ManagerType = {
  userId: string;
}

export const FormsManager: React.FC<ManagerType> = ({ userId }) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('finished');
  const [forms, setForms] = useState<FormItemProps[] | []>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
    .collection("forms")
    .where('userId', '==', userId)
    .where('status', '==', status)
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id, // o Id está um nível acima
          ...doc.data() // desestrutura o documento 
        }
      }) as FormItemProps[];

      setForms(data);
      setIsLoading(false);
      
    });
    return () => subscribe();
  }, [status]);

  //<Filters onFilter={setStatus} />
  return (
    <Container>
      
      <Filters onFilter={setStatus} />
      <Header>
        <Title>Formulários preenchidos:</Title>
        <Counter>{forms.length}</Counter>
      </Header>

      {
        isLoading ? 
          <Load />
         : 
          <FlatList
            data={forms}
            keyExtractor={form => form.id}
            renderItem={({item}) => (
              <FormCard form={item} />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
      
    </Container>
  );
}

// Arquivo: components\Forms\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 25px;   
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
  font-weight: 500;
`;

export const Counter = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  margin-bottom: 12px;
`;

// Arquivo: components\Header\index.tsx
import React from 'react';
import { Container, Greeting, Title, SubTitle, Container2, Logo } from './styles';

type HeaderType = {
  userName: string;
  userEmail: string;
}

export const Header: React.FC<HeaderType> = ({ userName, userEmail }) => {

  return (
    <Container>
      <Container2>
        <Logo source={require('./logo.jpg')} />
        <Greeting>
          <Title>{userName}enrique</Title>
          <SubTitle>{userEmail}</SubTitle>
        </Greeting>
      </Container2>
    </Container>
  );
}


// Arquivo: components\Header\styles.ts
import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Image)`
  margin-right: 15px;
  width: 60px;
  height: 60px;
  border-radius: 70px;
`;

export const Container2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Greeting = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;


// Arquivo: components\IconButton\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: any;
}

export function IconButton({ icon, color, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name={icon}
        size={28}
        color={(color == null) ? COLORS.SUBTEXT : color}
      />
    </Container>
  )
}


// Arquivo: components\IconButton\styles.ts
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 51px;
  height: 51px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

//background-color: ${({ theme }) => theme.COLORS.PRIMARY};

// Arquivo: components\Load\index.tsx
import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';

export function Load() {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.COLORS.PRIMARY}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}


// Arquivo: components\Order\index.tsx
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
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  _id: string;
  patrimony: string;
  equipment: string;
  description: string;
  created_at: Date;
}

type Props = PressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const theme = useTheme();


  return (
    <Container {...rest}>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.equipment}</Title>
          <MaterialIcons
            name={data.status === "open" ? "hourglass-empty" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {
                moment(data.created_at).format("DD/MM - HH:MM")
              }
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.patrimony}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}

// Arquivo: components\Order\styles.ts
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export type OrderStyleProps = {
  status: 'open' | 'closed';
};

export const Container = styled(Pressable)`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<OrderStyleProps>`
  width: 11px;
  height: 94px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${({ theme, status }) => status === 'open' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;

// Arquivo: components\StepIndicator\index.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import OriginalIndicator from 'react-native-step-indicator-v2';
import theme from '../../theme';

import { Container, Label, SelectedLabel } from './styles';

type LabelControl =  {
  position: number;
  stepStatus: string;
  label: string;
  currentPosition: number;
};

export function StepIndicator({ ...rest }) {
  const [position, setPosition] = useState<number>(0);

  // Se a posição for alterada devido a uma modificação nas props, atualize
  //useEffect(() => {
  //});
  
  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: theme.COLORS.PRIMARY,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: theme.COLORS.PRIMARY,
    stepStrokeUnFinishedColor: theme.COLORS.BORDER,
    separatorFinishedColor: theme.COLORS.PRIMARY,
    separatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorFinishedColor: theme.COLORS.PRIMARY,
    stepIndicatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorCurrentColor: theme.COLORS.PRIMARY,
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: theme.COLORS.WHITE,
    stepIndicatorLabelFinishedColor: theme.COLORS.WHITE,
    stepIndicatorLabelUnFinishedColor: theme.COLORS.SUBTEXT,
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: theme.COLORS.PRIMARY,
    borderRadiusSize: 30,
  };

  // Se a posição for alterada por um clique no step, atualize
  //function onStepPress (position: number) {
  //  setPosition(position);
  //};

  function renderLabel({ position, label, currentPosition }: LabelControl) {
    return (
      <View>
        { position === currentPosition 
          ? <SelectedLabel>{label}</SelectedLabel> 
          : <Label>{label}</Label>
        }
      </View>
    );
  };

  return (
    <Container>
      <OriginalIndicator
          customStyles={firstIndicatorStyles}
          renderLabel={renderLabel}
          {...rest}
        />
    </Container>
  );
}

// Arquivo: components\StepIndicator\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
`;

export const Label = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const SelectedLabel = styled.Text`
font-size: 12px;
text-align: center;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// Arquivo: merged-output.ts
// Merged File

// File: navigation.d.ts, Path: @types\navigation.d.ts
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
    }
  }
}

// File: index.tsx, Path: components\AuthHeader\index.tsx
import React from 'react';

import { Container, Title, Logo } from './styles';

type Props = {
  title: string;
};

export function AuthHeader({ title, ...rest }: Props) {
  return (
    <Container>
      <Logo source={require('./logo2_small.png')} />
      <Title>{title}</Title>
    </Container>
  );
}


// File: styles.ts, Path: components\AuthHeader\styles.ts
import styled from 'styled-components/native';
import { Image } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin-top: 44px;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  align-self: center;
  margin-top: 10px;
`;

export const Logo = styled(Image)`
  position: absolute;
  margin-left: 20px;
`;

// File: styles.ts, Path: components\BaseComponents\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #21AEEF;
`;

export const RoundContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  flex: 1;
`;

export const Form = styled.View`
  padding: 30px 30px;
  flex: 1;
`;

export const Subtext = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  align-self: center;
  margin-top: 20px;
`;

export const AltSubtext = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  align-self: center;
  margin-top: 20px;
`;

export const BottomWrapper = styled.View`
  flex: 1;
  justifyContent: flex-end;
`;


//padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;

// File: index.tsx, Path: components\Button\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}


// File: styles.ts, Path: components\Button\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``;

// File: index.tsx, Path: components\Button copy\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function NavButton({ title, isLoading = false, ...rest }: Props) {
  return (
    <Container enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  )
}


// File: styles.ts, Path: components\Button copy\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 48%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE
}))``;

// File: index.tsx, Path: components\Filter\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, FilterProps } from './styles';

type Props = FilterProps & TouchableOpacityProps & {
  title: string;
}

export function Filter({ title, backgroundColor, ...rest }: Props) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}


// File: styles.ts, Path: components\Filter\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterProps = {
  backgroundColor: string;
}

export const Container = styled(TouchableOpacity) <FilterProps>`
  flex: 1;  
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

// File: index.tsx, Path: components\Filters\index.tsx
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

// File: styles.ts, Path: components\Filters\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-bottom: 16px;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

// File: index.tsx, Path: components\FloatingButton\index.tsx
import React from 'react';
import ActionButton from 'react-native-action-button';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

//import { Container, Fab } from './styles';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export function FloatingButton({ icon, onPress }: Props) {
  const { COLORS } = useTheme();
  return (
    <ActionButton buttonColor={COLORS.PRIMARY} onPress={onPress} >
        <MaterialIcons
          name={icon}
          size={28}
          color={COLORS.WHITE}
        />
    </ActionButton>  
  )
}

// File: styles.ts, Path: components\FloatingButton\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  border: 1px solid black;
`;

export const Fab = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// File: index.tsx, Path: components\FormCard\index.tsx
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
          <Title>Formulário {moment(form.createdAt).format("DD/MM - HH:MM")}</Title>
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
              39 questões
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );    
}


// File: styles.ts, Path: components\FormCard\styles.ts
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export type FormStyleProps = {
  status: 'pending' | 'finished';
};

export const Container = styled(Pressable)`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<FormStyleProps>`
  width: 11px;
  height: 94px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${({ theme, status }) => status === 'finished' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;

export const MarginLabel = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-right: 3px;
`;

// File: index.tsx, Path: components\FormControls\CheckBox\index.tsx
import React from 'react';
import { useTheme } from 'styled-components/native';
import BouncyCheckbox, { IBouncyCheckboxProps } from "react-native-bouncy-checkbox";

import { Container } from './styles';

export function CheckBox({...rest }: IBouncyCheckboxProps) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <BouncyCheckbox
        useNativeDriver={true}
        size={25}
        fillColor={ COLORS.PRIMARY }
        unfillColor={ COLORS.WHITE }
        iconStyle={{ borderRadius: 9, borderColor: COLORS.PRIMARY }}
        textStyle={{
          textDecorationLine: "none",
          color: COLORS.TEXT,
        }}
        {...rest}
      />
    </Container>
  );
}




// File: styles.ts, Path: components\FormControls\CheckBox\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;



// File: index.tsx, Path: components\FormControls\CheckBoxGroup\index.tsx
import React from "react";
import { useTheme } from 'styled-components/native';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { Container } from './styles';

type Props = {
  labels: string[];
  onChange: (selectedItem: ICheckboxButton) => void;
};

export function CheckBoxGroup({labels, onChange, ...rest }: Props) {
  const { COLORS } = useTheme();

  const staticData: ICheckboxButton[] = [];

  labels.forEach((label, index) => {
    staticData.push({
      id: index,
      text: label,
      textStyle: { textDecorationLine: "none" },
      fillColor: COLORS.PRIMARY,
      unfillColor: COLORS.PRIMARY_FADED,
      iconStyle: {
        height: 30,
        width: 30,
        borderRadius: 25,
        borderColor: COLORS.WHITE,
      },
      style: { marginTop: 16 },
      iconImageStyle: { height: 15, width: 15 },
    });
  });

  //initial={0}
  return (
    <Container>
      <BouncyCheckboxGroup
        data={staticData}
        onChange={onChange}
        style={{ flexDirection: "column" }}
        {...rest}
      />
    </Container>
  );
}




// File: styles.ts, Path: components\FormControls\CheckBoxGroup\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  margin-bottom: 5px;
`;



// File: index.tsx, Path: components\FormControls\Datepicker\index.tsx
import React, { useState } from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Label, DateInputWrapper, DateInput, DateInputText } from './styles';

type Props = TouchableOpacityProps & {
  label: string;
};

export function Datepicker({ label, ...rest }: Props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getFormattedDate = () => {
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <DateInputWrapper onPress={showDatepicker} {...rest}>
        <DateInput>
          <DateInputText>
            {getFormattedDate()}
          </DateInputText>
        </DateInput>
      </DateInputWrapper>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </Container>
  );
}

// File: styles.ts, Path: components\FormControls\Datepicker\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DateInputWrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  
`;

export const DateInput = styled.View`
  flex: 1;  
  justify-content: center;
`;

export const DateInputText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

/**
export const CustomInput = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 14px;
  padding: 0 0;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; */



// File: index.tsx, Path: components\FormControls\Input\index.tsx
import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input as StyledInput, Label, FeedbackText } from './styles';

type Props = TextInputProps & {
  label?: string;
  feedbackText?: string;
  noInput?: boolean;
};

export function Input({ label, feedbackText, noInput, ...rest }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput {...rest} />
      { feedbackText != null && (
        <FeedbackText>{feedbackText}</FeedbackText>
      )}
      
    </Container>
  );
}

export function LoneLabel(props: any) {
  return (
    <Container>
      <Label>{props.label}</Label>
      { props.children }
    </Container>
  );
}

// File: styles.ts, Path: components\FormControls\Input\styles.ts
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0px;
  font-size: 16px;
  padding: 0 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER2}
  color: ${({ theme }) => theme.COLORS.TEXT};
`; 

export const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const FeedbackText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// File: index.tsx, Path: components\FormControls\Slider\index.tsx
import React from 'react';
import { Slider as RawSlider } from '@miblanchard/react-native-slider';
import { useTheme } from 'styled-components/native';

import { CustomStyles3, Container, Caption, Row } from './styles';

type Props = {
  value?: number;
  captions?: string[];
  onValueChange?: (value: number | Array<number>) => void;
};

export function Slider({ value, onValueChange, captions }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container>

      <RawSlider
        value={value}
        minimumValue={0}
        maximumValue={captions.length-1}
        step={1}
        trackClickable={false}
        animateTransitions
        minimumTrackTintColor={COLORS.PRIMARY}
        thumbStyle={CustomStyles3.thumb}
        trackStyle={CustomStyles3.track}
        onValueChange={onValueChange}
      />

      <Row>
        {captions.map((caption) => (
          <Caption key={caption.toString()}>{caption}</Caption>
        ))}
      </Row>
      
    </Container>
    
  );
}

// File: styles.ts, Path: components\FormControls\Slider\styles.ts
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import THEME from '../../../theme/index';

export const CustomStyles3 = StyleSheet.create({
  thumb: {
      backgroundColor: THEME.COLORS.TEXT,
      borderRadius: 60,
      height: 25,
      width: 25,
  },
  track: {
      backgroundColor: THEME.COLORS.BORDER,
      borderRadius: 5,
      height: 10,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Caption = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

// File: index.tsx, Path: components\FormControls\TextArea\index.tsx
import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return <Container multiline {...rest} />
}

// File: styles.ts, Path: components\FormControls\TextArea\styles.ts
import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

// File: index.tsx, Path: components\Forms\index.tsx
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

// Firebase Firestore
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Load } from '../Load';
import { Filters } from '../Filters';
import { Container, Header, Title, Counter } from './styles';
import { FormCard } from '../FormCard';
import { FormItemProps } from '../FormCard';

type ManagerType = {
  userId: string;
}

export const FormsManager: React.FC<ManagerType> = ({ userId }) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('finished');
  const [forms, setForms] = useState<FormItemProps[] | []>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
    .collection("forms")
    .where('userId', '==', userId)
    .where('status', '==', status)
    .orderBy('createdAt', 'desc')
    .onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        return {
          id: doc.id, // o Id está um nível acima
          ...doc.data() // desestrutura o documento 
        }
      }) as FormItemProps[];

      setForms(data);
      setIsLoading(false);
      
    });
    return () => subscribe();
  }, [status]);

  //<Filters onFilter={setStatus} />
  return (
    <Container>
      
      <Filters onFilter={setStatus} />
      <Header>
        <Title>Formulários preenchidos:</Title>
        <Counter>{forms.length}</Counter>
      </Header>

      {
        isLoading ? 
          <Load />
         : 
          <FlatList
            data={forms}
            keyExtractor={form => form.id}
            renderItem={({item}) => (
              <FormCard form={item} />
            )}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
      }
      
    </Container>
  );
}

// File: styles.ts, Path: components\Forms\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 25px;   
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 12px;
  font-weight: 500;
`;

export const Counter = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  margin-bottom: 12px;
`;

// File: index.tsx, Path: components\Header\index.tsx
import React from 'react';
import { Container, Greeting, Title, SubTitle, Container2, Logo } from './styles';

type HeaderType = {
  userName: string;
  userEmail: string;
}

export const Header: React.FC<HeaderType> = ({ userName, userEmail }) => {

  return (
    <Container>
      <Container2>
        <Logo source={require('./logo.jpg')} />
        <Greeting>
          <Title>{userName}enrique</Title>
          <SubTitle>{userEmail}</SubTitle>
        </Greeting>
      </Container2>
    </Container>
  );
}


// File: styles.ts, Path: components\Header\styles.ts
import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Image)`
  margin-right: 15px;
  width: 60px;
  height: 60px;
  border-radius: 70px;
`;

export const Container2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Greeting = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;


// File: index.tsx, Path: components\IconButton\index.tsx
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: any;
}

export function IconButton({ icon, color, ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name={icon}
        size={28}
        color={(color == null) ? COLORS.SUBTEXT : color}
      />
    </Container>
  )
}


// File: styles.ts, Path: components\IconButton\styles.ts
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 51px;
  height: 51px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

//background-color: ${({ theme }) => theme.COLORS.PRIMARY};

// File: index.tsx, Path: components\Load\index.tsx
import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';

export function Load() {
  const theme = useTheme();

  return (
    <ActivityIndicator
      color={theme.COLORS.PRIMARY}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    />
  );
}


// File: index.tsx, Path: components\Order\index.tsx
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
  OrderStyleProps
} from './styles';


export type OrderProps = OrderStyleProps & {
  _id: string;
  patrimony: string;
  equipment: string;
  description: string;
  created_at: Date;
}

type Props = PressableProps & {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const theme = useTheme();


  return (
    <Container {...rest}>
      <Status status={data.status} />

      <Content>
        <Header>
          <Title>{data.equipment}</Title>
          <MaterialIcons
            name={data.status === "open" ? "hourglass-empty" : "check-circle"}
            size={24}
            color={data.status === "open" ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY}
          />
        </Header>

        <Footer>
          <Info>
            <MaterialIcons name="schedule" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {
                moment(data.created_at).format("DD/MM - HH:MM")
              }
            </Label>
          </Info>

          <Info>
            <MaterialIcons name="my-location" size={16} color={theme.COLORS.SUBTEXT} />
            <Label>
              {data.patrimony}
            </Label>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}

// File: styles.ts, Path: components\Order\styles.ts
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export type OrderStyleProps = {
  status: 'open' | 'closed';
};

export const Container = styled(Pressable)`
  width: 100%;
  height: 94px;
  flex-direction: row;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  flex: 1;
  height: 94px;
  padding: 0 15px;
  justify-content: center;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<OrderStyleProps>`
  width: 11px;
  height: 94px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: ${({ theme, status }) => status === 'open' ? theme.COLORS.SECONDARY : theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
  font-weight: 500;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;

// File: index.tsx, Path: components\StepIndicator\index.tsx
import React, { useState } from 'react';
import { View } from 'react-native';
import OriginalIndicator from 'react-native-step-indicator-v2';
import theme from '../../theme';

import { Container, Label, SelectedLabel } from './styles';

type LabelControl =  {
  position: number;
  stepStatus: string;
  label: string;
  currentPosition: number;
};

export function StepIndicator({ ...rest }) {
  const [position, setPosition] = useState<number>(0);

  // Se a posição for alterada devido a uma modificação nas props, atualize
  //useEffect(() => {
  //});
  
  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: theme.COLORS.PRIMARY,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: theme.COLORS.PRIMARY,
    stepStrokeUnFinishedColor: theme.COLORS.BORDER,
    separatorFinishedColor: theme.COLORS.PRIMARY,
    separatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorFinishedColor: theme.COLORS.PRIMARY,
    stepIndicatorUnFinishedColor: theme.COLORS.BORDER,
    stepIndicatorCurrentColor: theme.COLORS.PRIMARY,
    stepIndicatorLabelFontSize: 14,
    currentStepIndicatorLabelFontSize: 14,
    stepIndicatorLabelCurrentColor: theme.COLORS.WHITE,
    stepIndicatorLabelFinishedColor: theme.COLORS.WHITE,
    stepIndicatorLabelUnFinishedColor: theme.COLORS.SUBTEXT,
    labelColor: '#999999',
    labelSize: 12,
    currentStepLabelColor: theme.COLORS.PRIMARY,
    borderRadiusSize: 30,
  };

  // Se a posição for alterada por um clique no step, atualize
  //function onStepPress (position: number) {
  //  setPosition(position);
  //};

  function renderLabel({ position, label, currentPosition }: LabelControl) {
    return (
      <View>
        { position === currentPosition 
          ? <SelectedLabel>{label}</SelectedLabel> 
          : <Label>{label}</Label>
        }
      </View>
    );
  };

  return (
    <Container>
      <OriginalIndicator
          customStyles={firstIndicatorStyles}
          renderLabel={renderLabel}
          {...rest}
        />
    </Container>
  );
}

// File: styles.ts, Path: components\StepIndicator\styles.ts
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
`;

export const Label = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
`;

export const SelectedLabel = styled.Text`
font-size: 12px;
text-align: center;
font-weight: 500;
color: ${({ theme }) => theme.COLORS.PRIMARY};
`;


// File: authStack.tsx, Path: routes\authStack.tsx
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}

// File: index.tsx, Path: routes\index.tsx
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Stacks para cada situação de usuário
import { AuthStack } from './authStack';
import { UserStack } from './userStack';

export const Routes: React.FC = () => {
  const firebase = auth();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = firebase.onAuthStateChanged(setUser);
    return subscriber; // retorna uma função de limpeza para subscriber
  }, []);

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

// File: userStack.tsx, Path: routes\userStack.tsx
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { NewForm } from '../screens/NewForm';
import { FormTest } from '../screens/Tests/';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStack() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: theme.COLORS.PRIMARY },
      headerTitleAlign: "center",
      headerTintColor: theme.COLORS.WHITE,
      headerTitleStyle: { fontWeight: 'bold', }
    }} >
      <Screen
        name="home"
        component={Home}
        options={{
          title: `Flow Início`,
        }}
      />
      <Screen
        name="formtest"
        component={FormTest}
        options={{
          title: `Novo Formulário`,
        }}
      />
      <Screen
        name="new"
        component={NewForm}
        options={{
          title: `Novo formulário`
        }}
      />
    </Navigator>
  );
}

// File: index.tsx, Path: screens\Home\index.tsx
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

// Custom Components
import { Container } from './styles'; 
import { Header } from '../../components/Header';
import { FormsManager } from '../../components/Forms';
import { Button } from '../../components/Button';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Pressable } from 'react-native';
import { IconButton } from '../../components/IconButton';

export const Home: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const firebase = auth();
  const user: FirebaseAuthTypes.User = firebase.currentUser;

  function handleGotoNewForm() {
    navigation.navigate("formtest");
  }

  function handleLogout() {
    firebase.signOut();
  }

  useEffect(() => {
    navigation.setOptions({
			headerRight: () => (
				<Pressable onPress={handleLogout} style={{ marginRight: -15 }} >
					<IconButton icon="logout" onPress={handleLogout} color={COLORS.WHITE}/>
				</Pressable>
			),
		})
  }, []);

  return (
    <Container>

      <Header userName={user.displayName} userEmail={user.email}/>

      <FormsManager userId={user.uid}/>

      <Button title="Novo" onPress={handleGotoNewForm} />
      
    </Container>
  );
}

// File: styles.ts, Path: screens\Home\styles.ts
import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight()}px 20px ${getBottomSpace() + 14}px ;
`;


// File: index.tsx, Path: screens\Login\index.tsx
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Styled Components
import { Container, RoundContainer, Form, Subtext, BottomWrapper, AltSubtext } from '../../components/BaseComponents/styles';

// Custom components
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Login: React.FC = () => {
  const firebase = auth();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSignIn() {
    if (email === "" || password === "") {
      setError("Preencha os campos de e-mail e senha.");
      return;
    }

    try {
      setIsLoading(true);
      await firebase.signInWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  }

function handleForgotPassword() {
  if (email === "") {
    Alert.alert("Redefinir senha", "Digite um e-mail válido");
    return;
  }

  firebase.sendPasswordResetEmail(email)
    .then(() => {
      Alert.alert("Redefinir senha", "Enviaremos um e-mail para voçê");
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleRedirectToRegister() {
  navigation.navigate("register");
}

return (
  <Container>
    <AuthHeader title="LOGIN" />
    <RoundContainer>
      <Form>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          placeholder="Digite sua senha"
        />
        <Button
          title="Entrar"
          onPress={handleSignIn}
        />

        {error !== '' && (
          <Subtext>
            Ocorreu um erro ao tentar fazer login
            <AltSubtext>{error}</AltSubtext>
          </Subtext>
        )}
        <BottomWrapper>
          <TouchableOpacity onPress={handleRedirectToRegister}>
            <Subtext>Não tem cadastro? <AltSubtext>Clique aqui</AltSubtext>
            </Subtext>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <AltSubtext>Esqueci a senha</AltSubtext>
          </TouchableOpacity>
        </BottomWrapper>
      </Form>
    </RoundContainer>
  </Container>
);
}

// File: styles.ts, Path: screens\Login\styles.ts
import styled from 'styled-components/native';





//padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;

// File: index.tsx, Path: screens\NewForm\index.tsx
import React, { useState, useCallback } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Container, Header, Title, Form } from './styles';
import { Input } from '../../components/FormControls/Input';
import { Button } from '../../components/Button';
import { IconButton } from '../../components/IconButton';

export const NewForm: React.FC = () => {
  const navigation = useNavigation();
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<string>('');
 
  function handleBack() {
    navigation.goBack();
  }

  function handleNewForm() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      description,
      questionCount,
      status: 'finished', // pode ter finished ou pendente
      createdAt: firestore.FieldValue.serverTimestamp(),
      userId: user.uid
    })
    .then(() => {
      Alert.alert(
        "Formulário",
        "Formulário enviado com sucesso!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <Container>
      
      <Header>

        <Title>Novo formulário:</Title>

        <IconButton icon="close" onPress={handleBack} />

      </Header>

      <Form>

        <Input
          placeholder="Descrição"
          onChangeText={setDescription}
        />

        <Input
          placeholder="Numero de questões"
          onChangeText={setQuestionCount}
        />

      </Form>

      <Button
        title="Enviar formulário"
        isLoading={isLoading}
        onPress={handleNewForm}
      />

    </Container>
  );
}

// File: styles.ts, Path: screens\NewForm\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content:center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 44px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`;

export const Form = styled.View`
  flex: 1;
`;

// File: index.tsx, Path: screens\Register\index.tsx
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Custom components
import { Container, RoundContainer, Form, Subtext, AltSubtext } from '../../components/BaseComponents/styles';
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleRegister() {
    if (name === '' || email === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return result.user.updateProfile({
        // É possivel colocar outros campos, ver documentação
        // https://rnfirebase.io/reference/auth/user
        displayName: name
      })
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setError("Esse e-mail já está cadastrado.");
      }

      if (error.code === "auth/invalid-email") {
        setError("E-mail inválido.");
      }

      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
    
  }

  function handleRedirectToLogin() {
    navigation.navigate("login")
  }

  return (
    <Container>

      <AuthHeader title="REGISTRO"/>

      <RoundContainer>

        <Form>

          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Digite seu primeiro nome ou apelido"
          />
 
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCompleteType="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
          />

          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCompleteType="password"
            textContentType="password"
            placeholder="Digite sua senha"
          />

          <Button
            title="Registrar"
            onPress={handleRegister}
            isLoading={isLoading}
          />

          {error !== '' && (
            <AltSubtext>{error}</AltSubtext>
          )}
          <TouchableOpacity onPress={handleRedirectToLogin} style={{marginTop:'auto'}}>

            <Subtext>Já tem uma conta? <AltSubtext>Faça login</AltSubtext></Subtext>

          </TouchableOpacity>

        </Form>

      </RoundContainer>
      
    </Container>
  );
}

// File: styles.ts, Path: screens\Register\styles.ts
import styled from 'styled-components/native';



// File: form1.tsx, Path: screens\Tests\forms\backup\form1.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

export const Form1: React.FC = () => {
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });
  
  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(form1Data)} />
      <Input 
        label="1. Horario em que foi notificado:" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. Quando você foi notificado, no que estava pensando?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Qual era a PRINCIPAL coisa que você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q3: value} })}
      />
      <Input 
        label="4. Que outras coisas você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q4: value} })}
      />
      
      <LoneLabel label="5. Por que você estava fazendo essa atividade especifica?">
        <CheckBoxGroup 
          onChange={selectedItem => setForm1Data(prev => { return {...prev, q5: selectedItem.text} })}
          labels={[
            "Eu tinha que fazer", 
            "Eu queria fazer", 
            "Eu não tinha outra coisa para fazer"
          ]}
        />
      </LoneLabel>
      
    </Form>
  );
}

// File: form2.tsx, Path: screens\Tests\forms\backup\form2.tsx
import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form2: React.FC = () => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>

      <LoneLabel label="1. Você estava bem concentrado?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <Slider captions={captions}/>
      </LoneLabel>
              
    </Form>
  );
}

// File: form3.tsx, Path: screens\Tests\forms\backup\form3.tsx
import React from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form3: React.FC = () => {
  return (
    <Form>
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider captions={['Alerta', 'Sonolento']}/>
        <Slider captions={['Feliz', 'Triste']}/>
        <Slider captions={['Irritado', 'Animado']}/>
        <Slider captions={['Forte', 'Fraco']}/>
        <Slider captions={['Ativo', 'Passivo']}/>
        <Slider captions={['Solitário', 'Sociável']}/>
        <Slider captions={['Envergonhado', 'Orgulhoso']}/>
        <Slider captions={['Envolvido', 'Distante']}/>
        <Slider captions={['Entusiasmado', 'Entendiado']}/>
        <Slider captions={['Fechado', 'Aberto']}/>
        <Slider captions={['Claro', 'Confuso']}/>
        <Slider captions={['Tenso', 'Relaxado']}/>
        <Slider captions={['Competitivo', 'Cooperativo']}/>
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <Slider maxValue={3} captions={['Nenhum', 'Leve', 'Incômodo', 'Severo']}/>
      </LoneLabel>
    </Form>
  );
}

// File: form4.tsx, Path: screens\Tests\forms\backup\form4.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input } from '../../../components/FormControls/Input';
import { CheckBox } from '../../../components/FormControls/CheckBox';

export const Form4: React.FC = () => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);

  return (
    <Form>
      <Input label="1. Com que você estava?" noInput={true} />
      <CheckBox 
        text="Sozinho" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Amigo" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Mãe" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Pai" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Irmão ou irmã" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Estranho" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Outros" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <Input label="Se selecionar outros, especifique:" />
    </Form>
  );
}

// File: form5.tsx, Path: screens\Tests\forms\backup\form5.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';

export const Form5: React.FC = () => {
  return (
    <Form>

      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider captions={['Fácil', 'Difícil']}/>
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider captions={['Pouco', 'Habilidoso(a)']}/>
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider captions={['Pouco', 'Bastante']}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

    </Form>
  );
}

// File: form6.tsx, Path: screens\Tests\forms\backup\form6.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input } from '../../../components/FormControls/Input';

export const Form6: React.FC = () => {
  return (
    <Form>
      
      <Input label="1. Se tivesse escolha, com quem estaria?" />
      <Input label="2. O que você estaria fazendo?" />
      <Input label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" />

    </Form>
  );
}

// File: form1.tsx, Path: screens\Tests\forms\form1.tsx
import React from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form1 = ({formData, setData}: Props) => {
  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <Input 
        label="1. Horario em que foi notificado:" 
        onChangeText={value => setData(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. Quando você foi notificado, no que estava pensando?" 
        onChangeText={value => setData(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Qual era a PRINCIPAL coisa que você estava fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q3: value} })}
      />
      <Input 
        label="4. Que outras coisas você estava fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q4: value} })}
      />
      
      <LoneLabel label="5. Por que você estava fazendo essa atividade especifica?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q5: selectedItem.text} })}
          labels={[
            "Eu tinha que fazer", 
            "Eu queria fazer", 
            "Eu não tinha outra coisa para fazer"
          ]}
        />
      </LoneLabel>
      
    </Form>
  );
}

// File: form2.tsx, Path: screens\Tests\forms\form2.tsx
import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form2 = ({formData, setData}: Props) => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Você estava bem concentrado?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q2: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q3: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q4: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q5: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q6: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q7: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>
              
    </Form>
  );
}

// File: form3.tsx, Path: screens\Tests\forms\form3.tsx
import React, { useEffect, useRef, useState } from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { Slider } from '../../../components/FormControls/Slider';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form3 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0); 
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);
  const [q9, setQ9] = useState<number>(0);
  const [q10, setQ10] = useState<number>(0);
  const [q11, setQ11] = useState<number>(0);
  const [q12, setQ12] = useState<number>(0);
  const [q13, setQ13] = useState<number>(0);
  const [q14, setQ14] = useState<string>(null);

  //Somente quando algum valor de um state muda que ele reseta o FormData
  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, 
      q8: q8, q9: q9, q10: q10, q11: q11, q12: q12, q13: q13, q14: q14
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider 
          value={q1}
          captions={['Alerta', 'Sonolento']}
          onValueChange={value => { setQ1(value[0]) }}
        />
        <Slider 
          value={q2}
          captions={['Feliz', 'Triste']}
          onValueChange={value => { setQ2(value[0]) }}
        />
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Irritado', 'Animado']}
        />
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Forte', 'Fraco']}
        />
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Ativo', 'Passivo']}
        />
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Solitário', 'Sociável']}
        />
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Envergonhado', 'Orgulhoso']}
        />
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Envolvido', 'Distante']}
        />
        <Slider 
          value={q9}
          onValueChange={value => { setQ9(value[0]) }}
          captions={['Entusiasmado', 'Entendiado']}
        />
        <Slider
          value={q10}
          onValueChange={value => { setQ10(value[0]) }} 
          captions={['Fechado', 'Aberto']}
        />
        <Slider 
          value={q11}
          onValueChange={value => { setQ11(value[0]) }}
          captions={['Claro', 'Confuso']}
        />
        <Slider 
          value={q12}
          onValueChange={value => { setQ12(value[0]) }}
          captions={['Tenso', 'Relaxado']}
        />
        <Slider 
          value={q13}
          onValueChange={value => { setQ13(value[0]) }}
          captions={['Competitivo', 'Cooperativo']}
        />
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <CheckBoxGroup 
          onChange={selectedItem => { setQ14(selectedItem.text) }}
          labels={['Nenhum', 'Leve', 'Incômodo', 'Severo']}
        />
      </LoneLabel>
    </Form>
  );
}

// File: form4.tsx, Path: screens\Tests\forms\form4.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form4 = ({formData, setData}: Props) => {
  const captions: string[] = ['Sozinho', 'Amigos(as)', 'Mãe', 'Pai', 'Irmão ou irmã', 'Estranho(s)', 'Outros'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Com quem você estava?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
        <Input 
          label="1.1 Se selecionar outros, especifique:" 
          onChangeText={value => setData(prev => { return {...prev, q2: value} })}
        />
      </LoneLabel>
    </Form>
  );
}

// File: form5.tsx, Path: screens\Tests\forms\form5.tsx
import React, { useEffect, useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form5 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);

  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider 
          value={q1}
          captions={['Fácil', 'Difícil']}
          onValueChange={value => { setQ1(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider 
          value={q2}
          captions={['Pouco', 'Habilidoso(a)']}
          onValueChange={value => { setQ2(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Pouco', 'Bastante']}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

    </Form>
  );
}

// File: form6.tsx, Path: screens\Tests\forms\form6.tsx
import React, { useState } from "react";
import { Form, BtnWrapper } from '../styles';
import { Input } from '../../../components/FormControls/Input';
import { Button } from "../../../components/Button";

type Props = {
  formData: any;
  setData: any;
  isLoading: boolean;
  handleNewForm: any;
};

export const Form6 = ({formData, setData, isLoading, handleNewForm}: Props) => {
  return (
    <Form>
      <Input 
        label="1. Se tivesse escolha, com quem estaria?" 
        onChangeText={value => setData(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. O que você estaria fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" 
        onChangeText={value => setData(prev => { return {...prev, q3: value} })}
      />
      
      <Button
        title="Salvar respostas"
        isLoading={isLoading}
        onPress={handleNewForm}
      />
    </Form>
  );
}

// File: index.tsx, Path: screens\Tests\index.tsx
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper } from './styles';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
  });

  const [form2Data, setForm2Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null,
  });

  const [form3Data, setForm3Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  }); 
  
  const [form4Data, setForm4Data] = useState({
    q1: null,
    q2: "", // opcional
  });

  const [form5Data, setForm5Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  });

  const [form6Data, setForm6Data] = useState({
    q1: null, q2: null, q3: null,
  });

  // verifica se o usuário respondeu todas as questões de cada formulário
  function checkAnswers() {
    console.log("Verificando...");
    let notAnswered = 0;
    Object.keys(form1Data).forEach((key, index) => {
      if (form1Data[key] == null) notAnswered++;
    });

    Object.keys(form2Data).forEach((key, index) => {
      if (form2Data[key] == null) notAnswered++;
    });

    Object.keys(form3Data).forEach((key, index) => {
      if (form3Data[key] == null) notAnswered++;
    });

    Object.keys(form4Data).forEach((key, index) => {
      if (form4Data[key] == null) notAnswered++;
    });

    Object.keys(form5Data).forEach((key, index) => {
      if (form5Data[key] == null) notAnswered++;
    });

    Object.keys(form6Data).forEach((key, index) => {
      if (form6Data[key] == null) notAnswered++;
    });
    
    if (notAnswered > 0) {
      Alert.alert(
        "Formulário",
        `Faltam ${notAnswered} questões para responder!`,
        [
          { text: "OK" }
        ]
      );
    } else {
      console.log("Formulário pronto para enviar")
      handleNewOrder();
    }
  }

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      form1: form1Data,
      form2: form2Data,
      form3: form3Data,
      form4: form4Data,
      form5: form5Data,
      form6: form6Data,
      status: 'finished', // pode ter finished ou pendente
      createdAt: new Date(),
      userId: user.uid
    })
    .then(() => {
      Alert.alert(
        "Formulário",
        "Formulário enviado com sucesso!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  }

  function goBack() {
    Alert.alert(
      "Formulário",
      "Deseja sair?\nSuas respostas não serão salvas.",
      [
        { text: "OK", onPress: () => navigation.goBack() },
        { text: "Ficar", onPress: () => {} }
      ]
    );
  }
{/* <TitleWrapper>
          <Title>Novo Formulário ({getHour()})</Title>
        </TitleWrapper>

        <IconButton icon="chevron-left" onPress={goBack} /> */}
  return (
    <Container>
      <Header>
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} scrollEnabled={false} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3 formData={form3Data} setData={setForm3Data}/>
        <Form4 formData={form4Data} setData={setForm4Data}/>
        <Form5 formData={form5Data} setData={setForm5Data}/>
        <Form6 formData={form6Data} setData={setForm6Data} handleNewForm={handleNewOrder} isLoading={isLoading}/>
      </Swiper>
    
    </Container>
  );
  //onIndexChanged={index => { setCurrentPage(index) }}
}


// File: index_backup.tsx, Path: screens\Tests\index_backup.tsx
import React, { useState } from 'react';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper, BtnWrapper } from './styles';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const [form2Data, setForm2Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  function handleNewOrder() {
    navigation.navigate("home");
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  };

  function renderForm() {
    switch (currentPage) {
      case 0:
        return <Form1 formData={form1Data} setData={setForm1Data}/>;
      case 1:
        return <Form2 formData={form2Data} setData={setForm2Data}/>;
      case 2:
        return <Form3/>;
      case 3:
        return <Form4/>;
      case 4:
        return <Form5/>;
      case 5:
        return <Form6/>;
    }
  }

  /**
   * A fazer:
   * - Setar Formik e Yup
   * - Ver a possibilidade de separar cada formulário em um arquivo
   * - Utilizar um método para mudar o Swiper e o StepIndicator ao mesmo tempo (para igualar as animações)
   */

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário ({currentPage+1})</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={handleNewOrder} />
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>
      </Swiper>

      <BtnWrapper>
        <Button title="Próximo" onPress={() => {}} />
      </BtnWrapper>
    
    </Container>
  );
  //{renderForm()}
}


// File: styles.ts, Path: screens\Tests\styles.ts
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content:center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 28px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleWrapper = styled.View`
  position: absolute;
  width: 100%;
  margin-top: 41px
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Form = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

export const BtnWrapper = styled.View`
  padding: 0px 20px;
  flexDirection: row;
  flexWrap: wrap;
  justify-content:space-between;
`;

// File: index.ts, Path: theme\index.ts
export default {
  COLORS: {
    BACKGROUND: '#F3F6FF',
    PRIMARY: '#21AEEF',
    PRIMARY_FADED: '#89c8f5',
    SECONDARY: '#2C3550',
    TEXT: '#2C3550',
    SUBTEXT: '#6B7BB0',
    WHITE: '#FFFFFF',
    BORDER: '#D8DFF6',
    BORDER2: '#97a2c7',
  }, 
  FONTS: {
    POPPINS: 'Poppins-Regular',
  }
};


// File: styled.d.ts, Path: theme\styled.d.ts
import 'styled-components';
import theme from '.';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}




// Arquivo: routes\authStack.tsx
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}

// Arquivo: routes\index.tsx
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

// Stacks para cada situação de usuário
import { AuthStack } from './authStack';
import { UserStack } from './userStack';

export const Routes: React.FC = () => {
  const firebase = auth();
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = firebase.onAuthStateChanged(setUser);
    return subscriber; // retorna uma função de limpeza para subscriber
  }, []);

  return (
    <NavigationContainer>
      {user ? <UserStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

// Arquivo: routes\userStack.tsx
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { NewForm } from '../screens/NewForm';
import { FormTest } from '../screens/Tests/';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStack() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: theme.COLORS.PRIMARY },
      headerTitleAlign: "center",
      headerTintColor: theme.COLORS.WHITE,
      headerTitleStyle: { fontWeight: 'bold', }
    }} >
      <Screen
        name="home"
        component={Home}
        options={{
          title: `Flow Início`,
        }}
      />
      <Screen
        name="formtest"
        component={FormTest}
        options={{
          title: `Novo Formulário`,
        }}
      />
      <Screen
        name="new"
        component={NewForm}
        options={{
          title: `Novo formulário`
        }}
      />
    </Navigator>
  );
}

// Arquivo: screens\Home\index.tsx
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

// Custom Components
import { Container } from './styles'; 
import { Header } from '../../components/Header';
import { FormsManager } from '../../components/Forms';
import { Button } from '../../components/Button';

// Firebase Authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Pressable } from 'react-native';
import { IconButton } from '../../components/IconButton';

export const Home: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const firebase = auth();
  const user: FirebaseAuthTypes.User = firebase.currentUser;

  function handleGotoNewForm() {
    navigation.navigate("formtest");
  }

  function handleLogout() {
    firebase.signOut();
  }

  useEffect(() => {
    navigation.setOptions({
			headerRight: () => (
				<Pressable onPress={handleLogout} style={{ marginRight: -15 }} >
					<IconButton icon="logout" onPress={handleLogout} color={COLORS.WHITE}/>
				</Pressable>
			),
		})
  }, []);

  return (
    <Container>

      <Header userName={user.displayName} userEmail={user.email}/>

      <FormsManager userId={user.uid}/>

      <Button title="Novo" onPress={handleGotoNewForm} />
      
    </Container>
  );
}

// Arquivo: screens\Home\styles.ts
import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: ${getStatusBarHeight()}px 20px ${getBottomSpace() + 14}px ;
`;


// Arquivo: screens\Login\index.tsx
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Styled Components
import { Container, RoundContainer, Form, Subtext, BottomWrapper, AltSubtext } from '../../components/BaseComponents/styles';

// Custom components
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Login: React.FC = () => {
  const firebase = auth();
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSignIn() {
    if (email === "" || password === "") {
      setError("Preencha os campos de e-mail e senha.");
      return;
    }

    try {
      setIsLoading(true);
      await firebase.signInWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  }

function handleForgotPassword() {
  if (email === "") {
    Alert.alert("Redefinir senha", "Digite um e-mail válido");
    return;
  }

  firebase.sendPasswordResetEmail(email)
    .then(() => {
      Alert.alert("Redefinir senha", "Enviaremos um e-mail para voçê");
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleRedirectToRegister() {
  navigation.navigate("register");
}

return (
  <Container>
    <AuthHeader title="LOGIN" />
    <RoundContainer>
      <Form>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
        />
        <Input
          label="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
          placeholder="Digite sua senha"
        />
        <Button
          title="Entrar"
          onPress={handleSignIn}
        />

        {error !== '' && (
          <Subtext>
            Ocorreu um erro ao tentar fazer login
            <AltSubtext>{error}</AltSubtext>
          </Subtext>
        )}
        <BottomWrapper>
          <TouchableOpacity onPress={handleRedirectToRegister}>
            <Subtext>Não tem cadastro? <AltSubtext>Clique aqui</AltSubtext>
            </Subtext>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <AltSubtext>Esqueci a senha</AltSubtext>
          </TouchableOpacity>
        </BottomWrapper>
      </Form>
    </RoundContainer>
  </Container>
);
}

// Arquivo: screens\Login\styles.ts
import styled from 'styled-components/native';





//padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px ;

// Arquivo: screens\NewForm\index.tsx
import React, { useState, useCallback } from 'react';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Custom components
import { Container, Header, Title, Form } from './styles';
import { Input } from '../../components/FormControls/Input';
import { Button } from '../../components/Button';
import { IconButton } from '../../components/IconButton';

export const NewForm: React.FC = () => {
  const navigation = useNavigation();
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [questionCount, setQuestionCount] = useState<string>('');
 
  function handleBack() {
    navigation.goBack();
  }

  function handleNewForm() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      description,
      questionCount,
      status: 'finished', // pode ter finished ou pendente
      createdAt: firestore.FieldValue.serverTimestamp(),
      userId: user.uid
    })
    .then(() => {
      Alert.alert(
        "Formulário",
        "Formulário enviado com sucesso!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  return (
    <Container>
      
      <Header>

        <Title>Novo formulário:</Title>

        <IconButton icon="close" onPress={handleBack} />

      </Header>

      <Form>

        <Input
          placeholder="Descrição"
          onChangeText={setDescription}
        />

        <Input
          placeholder="Numero de questões"
          onChangeText={setQuestionCount}
        />

      </Form>

      <Button
        title="Enviar formulário"
        isLoading={isLoading}
        onPress={handleNewForm}
      />

    </Container>
  );
}

// Arquivo: screens\NewForm\styles.ts
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content:center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 44px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  align-self: center;
`;

export const Form = styled.View`
  flex: 1;
`;

// Arquivo: screens\Register\index.tsx
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Firebase Authentication
import auth from '@react-native-firebase/auth';

// Custom components
import { Container, RoundContainer, Form, Subtext, AltSubtext } from '../../components/BaseComponents/styles';
import { AuthHeader } from '../../components/AuthHeader';
import { Button } from '../../components/Button';
import { Input } from '../../components/FormControls/Input';

export const Register: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleRegister() {
    if (name === '' || email === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      return result.user.updateProfile({
        // É possivel colocar outros campos, ver documentação
        // https://rnfirebase.io/reference/auth/user
        displayName: name
      })
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        setError("Esse e-mail já está cadastrado.");
      }

      if (error.code === "auth/invalid-email") {
        setError("E-mail inválido.");
      }

      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
    
  }

  function handleRedirectToLogin() {
    navigation.navigate("login")
  }

  return (
    <Container>

      <AuthHeader title="REGISTRO"/>

      <RoundContainer>

        <Form>

          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoCorrect={false}
            placeholder="Digite seu primeiro nome ou apelido"
          />
 
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCompleteType="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu email"
          />

          <Input
            label="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCompleteType="password"
            textContentType="password"
            placeholder="Digite sua senha"
          />

          <Button
            title="Registrar"
            onPress={handleRegister}
            isLoading={isLoading}
          />

          {error !== '' && (
            <AltSubtext>{error}</AltSubtext>
          )}
          <TouchableOpacity onPress={handleRedirectToLogin} style={{marginTop:'auto'}}>

            <Subtext>Já tem uma conta? <AltSubtext>Faça login</AltSubtext></Subtext>

          </TouchableOpacity>

        </Form>

      </RoundContainer>
      
    </Container>
  );
}

// Arquivo: screens\Register\styles.ts
import styled from 'styled-components/native';



// Arquivo: screens\Tests\forms\backup\form1.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

export const Form1: React.FC = () => {
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });
  
  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(form1Data)} />
      <Input 
        label="1. Horario em que foi notificado:" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. Quando você foi notificado, no que estava pensando?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Qual era a PRINCIPAL coisa que você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q3: value} })}
      />
      <Input 
        label="4. Que outras coisas você estava fazendo?" 
        onChangeText={value => setForm1Data(prev => { return {...prev, q4: value} })}
      />
      
      <LoneLabel label="5. Por que você estava fazendo essa atividade especifica?">
        <CheckBoxGroup 
          onChange={selectedItem => setForm1Data(prev => { return {...prev, q5: selectedItem.text} })}
          labels={[
            "Eu tinha que fazer", 
            "Eu queria fazer", 
            "Eu não tinha outra coisa para fazer"
          ]}
        />
      </LoneLabel>
      
    </Form>
  );
}

// Arquivo: screens\Tests\forms\backup\form2.tsx
import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form2: React.FC = () => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>

      <LoneLabel label="1. Você estava bem concentrado?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <Slider captions={captions}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <Slider captions={captions}/>
      </LoneLabel>
              
    </Form>
  );
}

// Arquivo: screens\Tests\forms\backup\form3.tsx
import React from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { Slider } from '../../../components/FormControls/Slider';

export const Form3: React.FC = () => {
  return (
    <Form>
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider captions={['Alerta', 'Sonolento']}/>
        <Slider captions={['Feliz', 'Triste']}/>
        <Slider captions={['Irritado', 'Animado']}/>
        <Slider captions={['Forte', 'Fraco']}/>
        <Slider captions={['Ativo', 'Passivo']}/>
        <Slider captions={['Solitário', 'Sociável']}/>
        <Slider captions={['Envergonhado', 'Orgulhoso']}/>
        <Slider captions={['Envolvido', 'Distante']}/>
        <Slider captions={['Entusiasmado', 'Entendiado']}/>
        <Slider captions={['Fechado', 'Aberto']}/>
        <Slider captions={['Claro', 'Confuso']}/>
        <Slider captions={['Tenso', 'Relaxado']}/>
        <Slider captions={['Competitivo', 'Cooperativo']}/>
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <Slider maxValue={3} captions={['Nenhum', 'Leve', 'Incômodo', 'Severo']}/>
      </LoneLabel>
    </Form>
  );
}

// Arquivo: screens\Tests\forms\backup\form4.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input } from '../../../components/FormControls/Input';
import { CheckBox } from '../../../components/FormControls/CheckBox';

export const Form4: React.FC = () => {
  const [checkboxState, setCheckboxState] = useState<boolean>(false);

  return (
    <Form>
      <Input label="1. Com que você estava?" noInput={true} />
      <CheckBox 
        text="Sozinho" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Amigo" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Mãe" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Pai" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Irmão ou irmã" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Estranho" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <CheckBox 
        text="Outros" 
        isChecked={checkboxState} 
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <Input label="Se selecionar outros, especifique:" />
    </Form>
  );
}

// Arquivo: screens\Tests\forms\backup\form5.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';

export const Form5: React.FC = () => {
  return (
    <Form>

      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider captions={['Fácil', 'Difícil']}/>
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider captions={['Pouco', 'Habilidoso(a)']}/>
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider captions={['Pouco', 'Bastante']}/>
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider captions={['Pouco', 'Muito']}/>
      </LoneLabel>

    </Form>
  );
}

// Arquivo: screens\Tests\forms\backup\form6.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input } from '../../../components/FormControls/Input';

export const Form6: React.FC = () => {
  return (
    <Form>
      
      <Input label="1. Se tivesse escolha, com quem estaria?" />
      <Input label="2. O que você estaria fazendo?" />
      <Input label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" />

    </Form>
  );
}

// Arquivo: screens\Tests\forms\form1.tsx
import React from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form1 = ({formData, setData}: Props) => {
  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <Input 
        label="1. Horario em que foi notificado:" 
        onChangeText={value => setData(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. Quando você foi notificado, no que estava pensando?" 
        onChangeText={value => setData(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Qual era a PRINCIPAL coisa que você estava fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q3: value} })}
      />
      <Input 
        label="4. Que outras coisas você estava fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q4: value} })}
      />
      
      <LoneLabel label="5. Por que você estava fazendo essa atividade especifica?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q5: selectedItem.text} })}
          labels={[
            "Eu tinha que fazer", 
            "Eu queria fazer", 
            "Eu não tinha outra coisa para fazer"
          ]}
        />
      </LoneLabel>
      
    </Form>
  );
}

// Arquivo: screens\Tests\forms\form2.tsx
import React from "react";
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form2 = ({formData, setData}: Props) => {
  const captions: string[] = ['Pouco', 'Parcialmente', 'Bastante'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Você estava bem concentrado?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="2. Estava dificil de se concentrar?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q2: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="3. Você estava consciente de si mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q3: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="4. Você estava se sentindo bem consigo mesmo?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q4: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava no controle da situação?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q5: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="6. Você estava correspondendo as suas próprias expectativas?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q6: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava correspondendo as expectativas dos outros?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q7: selectedItem.text} })}
          labels={captions}
        />
      </LoneLabel>
              
    </Form>
  );
}

// Arquivo: screens\Tests\forms\form3.tsx
import React, { useEffect, useRef, useState } from "react";Slider
import { Form } from '../styles';
import { LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { Slider } from '../../../components/FormControls/Slider';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form3 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0); 
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);
  const [q9, setQ9] = useState<number>(0);
  const [q10, setQ10] = useState<number>(0);
  const [q11, setQ11] = useState<number>(0);
  const [q12, setQ12] = useState<number>(0);
  const [q13, setQ13] = useState<number>(0);
  const [q14, setQ14] = useState<string>(null);

  //Somente quando algum valor de um state muda que ele reseta o FormData
  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, 
      q8: q8, q9: q9, q10: q10, q11: q11, q12: q12, q13: q13, q14: q14
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Descreva seu estado de espiríto ao ser notificado:">
        <Slider 
          value={q1}
          captions={['Alerta', 'Sonolento']}
          onValueChange={value => { setQ1(value[0]) }}
        />
        <Slider 
          value={q2}
          captions={['Feliz', 'Triste']}
          onValueChange={value => { setQ2(value[0]) }}
        />
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Irritado', 'Animado']}
        />
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Forte', 'Fraco']}
        />
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Ativo', 'Passivo']}
        />
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Solitário', 'Sociável']}
        />
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Envergonhado', 'Orgulhoso']}
        />
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Envolvido', 'Distante']}
        />
        <Slider 
          value={q9}
          onValueChange={value => { setQ9(value[0]) }}
          captions={['Entusiasmado', 'Entendiado']}
        />
        <Slider
          value={q10}
          onValueChange={value => { setQ10(value[0]) }} 
          captions={['Fechado', 'Aberto']}
        />
        <Slider 
          value={q11}
          onValueChange={value => { setQ11(value[0]) }}
          captions={['Claro', 'Confuso']}
        />
        <Slider 
          value={q12}
          onValueChange={value => { setQ12(value[0]) }}
          captions={['Tenso', 'Relaxado']}
        />
        <Slider 
          value={q13}
          onValueChange={value => { setQ13(value[0]) }}
          captions={['Competitivo', 'Cooperativo']}
        />
      </LoneLabel>

      <LoneLabel label="2. Dor ou desconforto geral?">
        <CheckBoxGroup 
          onChange={selectedItem => { setQ14(selectedItem.text) }}
          labels={['Nenhum', 'Leve', 'Incômodo', 'Severo']}
        />
      </LoneLabel>
    </Form>
  );
}

// Arquivo: screens\Tests\forms\form4.tsx
import React, { useState } from "react";
import { Form } from '../styles';
import { Input, LoneLabel } from '../../../components/FormControls/Input';
import { CheckBoxGroup } from '../../../components/FormControls/CheckBoxGroup';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form4 = ({formData, setData}: Props) => {
  const captions: string[] = ['Sozinho', 'Amigos(as)', 'Mãe', 'Pai', 'Irmão ou irmã', 'Estranho(s)', 'Outros'];

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Com quem você estava?">
        <CheckBoxGroup 
          onChange={selectedItem => setData(prev => { return {...prev, q1: selectedItem.text} })}
          labels={captions}
        />
        <Input 
          label="1.1 Se selecionar outros, especifique:" 
          onChangeText={value => setData(prev => { return {...prev, q2: value} })}
        />
      </LoneLabel>
    </Form>
  );
}

// Arquivo: screens\Tests\forms\form5.tsx
import React, { useEffect, useState } from "react";
import { Form } from '../styles';
import { Slider } from '../../../components/FormControls/Slider';
import { LoneLabel } from '../../../components/FormControls/Input';
import { IconButton } from "../../../components/IconButton";

type Props = {
  formData: any;
  setData: any;
};

export const Form5 = ({formData, setData}: Props) => {
  const [q1, setQ1] = useState<number>(0);
  const [q2, setQ2] = useState<number>(0);
  const [q3, setQ3] = useState<number>(0);
  const [q4, setQ4] = useState<number>(0);
  const [q5, setQ5] = useState<number>(0);
  const [q6, setQ6] = useState<number>(0);
  const [q7, setQ7] = useState<number>(0);
  const [q8, setQ8] = useState<number>(0);

  useEffect(() => {
    setData({
      q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6, q7: q7, q8: q8
    })
  }, [q1, q2, q3, q4, q5, q6, q7, q8]);

  return (
    <Form>
      <IconButton icon="chevron-left" onPress={() => console.log(formData)} />
      <LoneLabel label="1. Nível de desafio da atividade">
        <Slider 
          value={q1}
          captions={['Fácil', 'Difícil']}
          onValueChange={value => { setQ1(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="2. Seu nível de habilidade na atividade:">
        <Slider 
          value={q2}
          captions={['Pouco', 'Habilidoso(a)']}
          onValueChange={value => { setQ2(value[0]) }}
        />
      </LoneLabel>

      <LoneLabel label="3. Essa atividade era importante para você?">
        <Slider 
          value={q3}
          onValueChange={value => { setQ3(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="4. Essa atividade era importante para outras pessoas?">
        <Slider 
          value={q4}
          onValueChange={value => { setQ4(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="5. Você estava tendo sucesso no que estava fazendo?">
        <Slider 
          value={q5}
          onValueChange={value => { setQ5(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="6. Você gostaria de esta fazendo outra coisa?">
        <Slider 
          value={q6}
          onValueChange={value => { setQ6(value[0]) }}
          captions={['Pouco', 'Bastante']}
        />
      </LoneLabel>

      <LoneLabel label="7. Você estava satisfeito com seu desempenho?">
        <Slider 
          value={q7}
          onValueChange={value => { setQ7(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

      <LoneLabel label="8. Quão importante era essa atividade em relação aos seus objetivos gerais?">
        <Slider 
          value={q8}
          onValueChange={value => { setQ8(value[0]) }}
          captions={['Pouco', 'Muito']}
        />
      </LoneLabel>

    </Form>
  );
}

// Arquivo: screens\Tests\forms\form6.tsx
import React, { useState } from "react";
import { Form, BtnWrapper } from '../styles';
import { Input } from '../../../components/FormControls/Input';
import { Button } from "../../../components/Button";

type Props = {
  formData: any;
  setData: any;
  isLoading: boolean;
  handleNewForm: any;
};

export const Form6 = ({formData, setData, isLoading, handleNewForm}: Props) => {
  return (
    <Form>
      <Input 
        label="1. Se tivesse escolha, com quem estaria?" 
        onChangeText={value => setData(prev => { return {...prev, q1: value} })}
      />
      <Input 
        label="2. O que você estaria fazendo?" 
        onChangeText={value => setData(prev => { return {...prev, q2: value} })}
      />
      <Input 
        label="3. Desde a sua última notificação, aconteceu alguma coisa ou você fez alguma coisa que possa ter afetado a maneira como se sente?" 
        onChangeText={value => setData(prev => { return {...prev, q3: value} })}
      />
      
      <Button
        title="Salvar respostas"
        isLoading={isLoading}
        onPress={handleNewForm}
      />
    </Form>
  );
}

// Arquivo: screens\Tests\index.tsx
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper } from './styles';

// Firebase authentication
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const user: FirebaseAuthTypes.User = auth().currentUser;
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null,
  });

  const [form2Data, setForm2Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null,
  });

  const [form3Data, setForm3Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  }); 
  
  const [form4Data, setForm4Data] = useState({
    q1: null,
    q2: "", // opcional
  });

  const [form5Data, setForm5Data] = useState({
    q1: null, q2: null, q3: null, q4: null, q5: null, q6: null, q7: null, 
    q8: null, q9: null, q10: null, q11: null, q12: null, q13: null, q14: null,
  });

  const [form6Data, setForm6Data] = useState({
    q1: null, q2: null, q3: null,
  });

  // verifica se o usuário respondeu todas as questões de cada formulário
  function checkAnswers() {
    console.log("Verificando...");
    let notAnswered = 0;
    Object.keys(form1Data).forEach((key, index) => {
      if (form1Data[key] == null) notAnswered++;
    });

    Object.keys(form2Data).forEach((key, index) => {
      if (form2Data[key] == null) notAnswered++;
    });

    Object.keys(form3Data).forEach((key, index) => {
      if (form3Data[key] == null) notAnswered++;
    });

    Object.keys(form4Data).forEach((key, index) => {
      if (form4Data[key] == null) notAnswered++;
    });

    Object.keys(form5Data).forEach((key, index) => {
      if (form5Data[key] == null) notAnswered++;
    });

    Object.keys(form6Data).forEach((key, index) => {
      if (form6Data[key] == null) notAnswered++;
    });
    
    if (notAnswered > 0) {
      Alert.alert(
        "Formulário",
        `Faltam ${notAnswered} questões para responder!`,
        [
          { text: "OK" }
        ]
      );
    } else {
      console.log("Formulário pronto para enviar")
      handleNewOrder();
    }
  }

  function handleNewOrder() {
    setIsLoading(true);

    firestore()
    .collection('forms')
    .add({
      form1: form1Data,
      form2: form2Data,
      form3: form3Data,
      form4: form4Data,
      form5: form5Data,
      form6: form6Data,
      status: 'finished', // pode ter finished ou pendente
      createdAt: new Date(),
      userId: user.uid
    })
    .then(() => {
      Alert.alert(
        "Formulário",
        "Formulário enviado com sucesso!",
        [
          { text: "OK", onPress: () => navigation.goBack() }
        ]
      );
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  }

  function goBack() {
    Alert.alert(
      "Formulário",
      "Deseja sair?\nSuas respostas não serão salvas.",
      [
        { text: "OK", onPress: () => navigation.goBack() },
        { text: "Ficar", onPress: () => {} }
      ]
    );
  }
{/* <TitleWrapper>
          <Title>Novo Formulário ({getHour()})</Title>
        </TitleWrapper>

        <IconButton icon="chevron-left" onPress={goBack} /> */}
  return (
    <Container>
      <Header>
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} scrollEnabled={false} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3 formData={form3Data} setData={setForm3Data}/>
        <Form4 formData={form4Data} setData={setForm4Data}/>
        <Form5 formData={form5Data} setData={setForm5Data}/>
        <Form6 formData={form6Data} setData={setForm6Data} handleNewForm={handleNewOrder} isLoading={isLoading}/>
      </Swiper>
    
    </Container>
  );
  //onIndexChanged={index => { setCurrentPage(index) }}
}


// Arquivo: screens\Tests\index_backup.tsx
import React, { useState } from 'react';
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { IconButton } from '../../components/IconButton';
import { StepIndicator } from '../../components/StepIndicator';
import { Container, Header, Title, TitleWrapper, BtnWrapper } from './styles';

import { Form1 } from './forms/form1';
import { Form2 } from './forms/form2';
import { Form3 } from './forms/form3';
import { Form4 } from './forms/form4';
import { Form5 } from './forms/form5';
import { Form6 } from './forms/form6';
import { Button } from '../../components/Button';

export function FormTest() {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentHour, setCurrentHour] = useState(new Date());

  // Forms data
  const [form1Data, setForm1Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  });

  const [form2Data, setForm2Data] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  function handleNewOrder() {
    navigation.navigate("home");
  }

  function getHour() {
    const d = currentHour;
    return `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth()+1)).slice(-2)} - ${('0'+d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`;
  };

  function renderForm() {
    switch (currentPage) {
      case 0:
        return <Form1 formData={form1Data} setData={setForm1Data}/>;
      case 1:
        return <Form2 formData={form2Data} setData={setForm2Data}/>;
      case 2:
        return <Form3/>;
      case 3:
        return <Form4/>;
      case 4:
        return <Form5/>;
      case 5:
        return <Form6/>;
    }
  }

  /**
   * A fazer:
   * - Setar Formik e Yup
   * - Ver a possibilidade de separar cada formulário em um arquivo
   * - Utilizar um método para mudar o Swiper e o StepIndicator ao mesmo tempo (para igualar as animações)
   */

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Novo Formulário ({currentPage+1})</Title>
        </TitleWrapper>
        <IconButton icon="chevron-left" onPress={handleNewOrder} />
        <StepIndicator 
          currentPosition={currentPage} 
          labels={['', '', '', '','','']} 
          stepCount={6}
          onPress={index => { setCurrentPage(index) }} 
        />
      </Header>

      <Swiper onIndexChanged={index => { setCurrentPage(index) }} index={currentPage} showsButtons={false} loop={false} showsPagination={false}>
        <Form1 formData={form1Data} setData={setForm1Data}/>
        <Form2 formData={form2Data} setData={setForm2Data}/>
        <Form3/>
        <Form4/>
        <Form5/>
        <Form6/>
      </Swiper>

      <BtnWrapper>
        <Button title="Próximo" onPress={() => {}} />
      </BtnWrapper>
    
    </Container>
  );
  //{renderForm()}
}


// Arquivo: screens\Tests\styles.ts
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content:center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  width: 100%;
  padding-top: 28px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TitleWrapper = styled.View`
  position: absolute;
  width: 100%;
  margin-top: 41px
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Form = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

export const BtnWrapper = styled.View`
  padding: 0px 20px;
  flexDirection: row;
  flexWrap: wrap;
  justify-content:space-between;
`;

// Arquivo: theme\index.ts
export default {
  COLORS: {
    BACKGROUND: '#F3F6FF',
    PRIMARY: '#21AEEF',
    PRIMARY_FADED: '#89c8f5',
    SECONDARY: '#2C3550',
    TEXT: '#2C3550',
    SUBTEXT: '#6B7BB0',
    WHITE: '#FFFFFF',
    BORDER: '#D8DFF6',
    BORDER2: '#97a2c7',
  }, 
  FONTS: {
    POPPINS: 'Poppins-Regular',
  }
};


// Arquivo: theme\styled.d.ts
import 'styled-components';
import theme from '.';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}


