# Flow

**Um aplicativo para apoio à atenção plena dos atletas**

[![License: Custom](https://img.shields.io/badge/license-Custom-blue.svg)](https://suap.ifrn.edu.br/verificar-documento-externo/)

<p align="center">
 <img src="https://github.com/phaa/flow/blob/main/flow.png" title="Screen" width="800" />
</p>

## Descrição

O Flow é um aplicativo mobile desenvolvido para ajudar atletas a treinar atenção plena, registrando informações sobre seu estado emocional e psicológico ao longo do tempo.  
Utilizando tecnologias modernas como **React Native**, **Styled Components** e **Firebase**, o Flow proporciona uma experiência de uso fluida, segura e acessível tanto para Android quanto para iOS.

O aplicativo foi utilizado para a coleta de dados de atletas de handebol, alimentando a pesquisa de doutorado do professor **Luís Eugênio Martiny**.  
Esse estudo investigou os efeitos do estado de flow e do mindfulness na inteligência tática de atletas de esportes coletivos, e pode ser consultado [neste link](https://estudogeral.uc.pt/handle/10316/117512).  
Além disso, os resultados de pesquisas relacionadas ao tema foram publicados na revista FOCO, reforçando a relevância acadêmica do trabalho.

Este projeto integra pesquisa acadêmica do IFRN Campus Canguaretama e é oficialmente registrado no INPI【Registro de Software】.

## Sobre a Escolha das Tecnologias

Para maximizar a qualidade e a escalabilidade do projeto, foram escolhidas as seguintes tecnologias:

- **React Native**: Permitiu desenvolver uma aplicação nativa para Android e iOS com um único código-base, otimizando tempo de desenvolvimento e manutenção.
- **Styled Components**: Facilitou a criação de interfaces modulares e reutilizáveis, promovendo um estilo consistente e de fácil manutenção no aplicativo.
- **Firebase**: Foi utilizado para autenticação de usuários e armazenamento de dados na nuvem, garantindo segurança, confiabilidade e escalabilidade. Com isso, os dados dos atletas podem ser acessados de qualquer dispositivo em tempo real.

Essas escolhas foram fundamentais para alinhar o desenvolvimento do Flow com os princípios de mobilidade, alta disponibilidade e experiência de usuário de qualidade.

## Funcionalidades

- Cadastro e autenticação de usuários
- Preenchimento de formulários de autoavaliação em múltiplas etapas
- Histórico completo de respostas, com registro de data e hora
- Interface intuitiva e moderna

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Styled Components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/)
- [Figma](https://www.figma.com/) (para o design das telas)

## Utilização

Clone o projeto:
```bash
git clone https://github.com/phaa/flow.git
```

Instale as dependências:
```bash
yarn install
```

Inicie o expo:
```bash
npm start
```

## Estrutura de pastas
```bash
flow/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── screens/        # Telas principais (Login, Formulários, Histórico)
│   ├── services/       # Integrações com Firebase (auth e database)
│   └── utils/          # Funções auxiliares e helpers
├── artigos/            # Artigos relacionados ao projeto (ex: resumo da CONGIC)
├── registros/          # Documentos de registro (ex: registro no INPI)
├── App.js              # Ponto de entrada da aplicação
├── package.json
└── README.md
```

## Licença
Este software é registrado sob o Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN) e protegido conforme certificado de registro no INPI.
Todos os direitos reservados aos autores: Pedro Henrique Amorim de Azevedo, Tatiana Amaral Sorrentino e Luís Eugênio Martiny. 
