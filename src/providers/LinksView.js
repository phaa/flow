import React, { useState, useEffect } from "react";
import { TextInput, Button, Linking, View, Text, TouchableOpacity } from "react-native";
import { useLinks } from "../providers/LinksProvider";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../stylesheet";
import { Logout } from "../components/Logout";

export function LinksView() 
{
  const navigation = useNavigation();
  // controles do acordeon
  const [expanded, setExpanded] = useState(false);

  // variáveis para receber informações de um novo registro
  const [linkDescription, setLinkDescription] = useState("");
  const [linkURL, setlinkURL] = useState("");

  const { links, createLink, deleteLink, closeRealm } = useLinks();

  const onClickLink = (link) => {
    Linking.openURL(link.url).catch(err => console.error('Algo deu errado', err));
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: "Sair",
        headerLeft: () => <Logout closeRealm={closeRealm} />
    });
  }, [navigation]);

  useEffect(() => {
      console.log(JSON.stringify( links, null, 2));
  }); 

  return (
    <ScrollView>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>Criar um novo link</ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
      {
        <>
          <TextInput
            style={styles.input}
            onChangeText={setLinkDescription}
            placeholder="Descrição"
            value={linkDescription}
          />
          <TextInput
            style={styles.input}
            onChangeText={setlinkURL}
            placeholder="URL"
            value={linkURL}
          />
          <Button
                title='Enviar'
                color='red'
                onPress={ () => { createLink(linkDescription, linkURL); setExpanded(!expanded); }}
                />
        </>
      }
      </ListItem.Accordion>


      {links.map((link, index) =>
        <ListItem.Swipeable
          onPress={() => onClickLink(link)} bottomDivider key={index} 
          rightContent={
            <TouchableOpacity style={styles.deleteBox} onPress={() => deleteLink(link)} >
                <Text style={styles.deleteBoxText}>Apagar</Text>
            </TouchableOpacity>
            } >
          <ListItem.Content>
            <ListItem.Title>
              {link.name}
            </ListItem.Title>
            <ListItem.Subtitle>
              {link.url}
            </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem.Swipeable>
      )}
    </ScrollView>
  );
}