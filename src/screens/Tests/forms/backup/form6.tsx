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