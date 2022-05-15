import React, { useState, useEffect } from "react";
import { Text } from "react-native";

export function LinksView() {

    const { links, createLink, deleteLink } = useLinks();


    return (
        <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>Create new Link</ListItem.Title>
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
            placeholder="Description"
            value={linkDescription}
          />
          <TextInput
            style={styles.input}
            onChangeText={setlinkURL}
            placeholder="URL"
            value={linkURL}
          />
          <Button
                title='Click!'
                color='red'
                onPress={ () => { createLink(linkDescription, linkURL); }}
                />
        </>
      }
      </ListItem.Accordion>
    );
}

React.useLayoutEffect(() => {

    

    navigation.setOptions({
        headerBackTitle: "Log out",
        headerLeft: () => <Logout closeRealm={closeRealm} />
    });
  }, [navigation]); 

  {links.map((link, index) =>
    <ScrollView>
        <ListItem.Content>
            <ListItem.Title>
                {link.name}
            </ListItem.Title>
            <ListItem.Subtitle>
                {link.url}
            </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ScrollView>
  
  )}

  <ListItem.Swipeable
    onPress={() => onClickLink(link)}
    bottomDivider
    key={index} 
    rightContent={
        <Button
            title="Delete"
            onPress={() => deleteLink(link)}
        />
    }
>
</ListItem.Swipeable>


  