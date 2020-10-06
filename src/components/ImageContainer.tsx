import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PictureFrame } from './Elements'

// TODO: change the preview image for event.image
const image = {
  uri:
    'https://scontent.fgdl5-3.fna.fbcdn.net/v/t31.0-8/12362897_1006631586044926_4746100853881684559_o.jpg?_nc_cat=102&_nc_sid=19026a&_nc_ohc=Rr3xM-2HgjsAX-ScZ6D&_nc_ht=scontent.fgdl5-3.fna&oh=058554808f821a7a37bef1a8b5f40f39&oe=5F7E6AB0',
};

export interface props{
  status: string
}

export default function ImageContainer(props:props) {
  return (
    <View style={styles.container}>
      <PictureFrame
        style={styles.picture}
        image={image}
        shape={'square'}
        size={180}
      />
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{props.status}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
  },
  picture: {
    borderWidth: 3,
    borderColor: '#445068',
    borderRadius: 40
  },
  statusText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "500"
  },
  statusContainer: {
    backgroundColor: "#63ACAA",
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: -30
  }
});