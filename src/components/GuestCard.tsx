import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Custom components
import { Card, PictureFrame } from './Elements';

export interface props{
  guestName: string
}

export default function GuestCard(props: props) {
  // TODO: change the preview image for event.image
  const image = {
    uri:
      'https://scontent.fgdl5-3.fna.fbcdn.net/v/t31.0-8/12362897_1006631586044926_4746100853881684559_o.jpg?_nc_cat=102&_nc_sid=19026a&_nc_ohc=Rr3xM-2HgjsAX-ScZ6D&_nc_ht=scontent.fgdl5-3.fna&oh=058554808f821a7a37bef1a8b5f40f39&oe=5F7E6AB0',
  };

  return (
    <Card style={styles.card} shadowDepth={2}>
      <View style={styles.content}>
        <PictureFrame
          style={styles.picture}
          image={image}
          shape={'circle'}
          size={70}
        />
        <View style={styles.nameText}>
          <Text style={[styles.text, styles.title]}>{props.guestName}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
  nameText: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    paddingTop: 25
  },
  title: {
    marginLeft: 10,
    color: "#445068",
    fontWeight: 'bold',
    fontSize: 18,
  },
  content: {
    flexDirection: 'row',
    padding: 10,
  },
  picture: {
    marginRight: 10,
    borderWidth: 3,
    borderColor: '#445068',
  },
  text: {
    color: '#445068',
  },
  organizer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  capacity: {
    color: '#BD4455',
  },
});
