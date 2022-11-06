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