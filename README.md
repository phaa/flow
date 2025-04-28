# Flow

**An application to support athletes' mindfulness**

[![License: Custom](https://img.shields.io/badge/license-Custom-blue.svg)](https://suap.ifrn.edu.br/verificar-documento-externo/)

<p align="center">
  <img src="https://github.com/phaa/flow/blob/main/flow.png" title="Screen" width="800" />
</p>

## Description

Flow is a mobile application developed to help athletes practice mindfulness, recording information about their emotional and psychological state over time. Utilizing modern technologies such as **React Native**, **Styled Components**, and **Firebase**, Flow provides a fluid, secure, and accessible user experience for both Android and iOS.

The application was used to collect data from handball athletes, contributing to the doctoral research of professor **Luís Eugênio Martiny**. This study investigated the effects of flow state and mindfulness on the tactical intelligence of team sports athletes and can be consulted at [this link](https://estudogeral.uc.pt/handle/10316/117512). Furthermore, research findings related to the topic were published in the FOCO journal, reinforcing the academic relevance of the work.

This project integrates academic research from IFRN Campus Canguaretama and is officially registered with the INPI【Software Registration】.

## About the Choice of Technologies

To maximize the quality and scalability of the project, the following technologies were chosen:

- **React Native**: Enabled the development of a native application for Android and iOS with a single codebase, optimizing development and maintenance time.
- **Styled Components**: Facilitated the creation of modular and reusable interfaces, promoting a consistent and easily maintainable style throughout the application.
- **Firebase**: Was used for user authentication and cloud data storage, ensuring security, reliability, and scalability. This allows athletes' data to be accessed from any device in real-time.

These choices were fundamental in aligning Flow's development with the principles of mobility, high availability, and quality user experience.

## Features

- User registration and authentication
- Multi-step self-assessment form completion
- Complete response history with date and time recording
- Intuitive and modern interface

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Styled Components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/)
- [Figma](https://www.figma.com/) (for screen design)

## Usage

Clone the project:
```bash
git clone https://github.com/phaa/flow.git
```

Install dependencies:
```bash
yarn install
```

Start Expo:
```bash
npm start
```

## Folder estructure
```bash
flow/
├── src/
│   ├── components/     # Reusable components
│   ├── routes/         # Application routes
│   ├── screens/        # Main screens (Login, Forms, History)
│   └── theme/          # Styled components variables
├── android/            # Android native folder
├── registro-software/  # Registration documents (e.g., INPI registration)
├── App.js              # Application entry point
├── package.json
└── README.md
```

## License
This software is registered under the Federal Institute of Education, Science and Technology of Rio Grande do Norte (IFRN) and protected according to the INPI registration certificate.
All rights reserved to the authors: Pedro Henrique Amorim de Azevedo, Tatiana Amaral Sorrentino, and Luís Eugênio Martiny. 
