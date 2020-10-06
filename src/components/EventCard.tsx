import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
// Custom components
import { Card, PictureFrame } from './Elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Helper imports
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
//navigation
import { useNavigation, DrawerActions } from '@react-navigation/native';


export interface Event {
  id: string | number;
  name: string;
  capacity: number;
  description: string;
  organizer: string;
  status: string;
  date: Date;
  maxCapacity: number;
  imageUrl?: string;
  guests: string[];
  location: string;
}

type EventCardProps = {
  event: Event;
};

const EventCard = ({event}: EventCardProps) => {
  const navigation = useNavigation();
  
  // TODO: change the preview image for event.image
  const image = {
    uri:
      'https://scontent.fgdl5-3.fna.fbcdn.net/v/t31.0-8/12362897_1006631586044926_4746100853881684559_o.jpg?_nc_cat=102&_nc_sid=19026a&_nc_ohc=Rr3xM-2HgjsAX-ScZ6D&_nc_ht=scontent.fgdl5-3.fna&oh=058554808f821a7a37bef1a8b5f40f39&oe=5F7E6AB0',
  };
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventDetails', {
      eventID: event.id
    })}>
      <Card style={styles.card} shadowDepth={2}>
        <View style={styles.content}>
          <PictureFrame
            style={styles.picture}
            image={image}
            shape={'circle'}
            size={70}
          />
          <View style={{ flex: 1 }}>
            <Text style={[styles.text, styles.title]}>{event.name}</Text>
            <View style={styles.organizer}>
              <Icon name={'account'} size={16} color={'#63ACAA'} />
              <Text style={styles.text}>{event.organizer}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{moment(event.date).format('lll')}</Text>
              <Text
                style={
                  styles.capacity
                }>{`${event.capacity}/${event.maxCapacity}`}</Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginBottom: 15,
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
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
