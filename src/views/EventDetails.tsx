import React, { useMemo } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import ImageContainer from '../components/ImageContainer'
import GuestCard from '../components/GuestCard'
//fake data
import { events } from '../helpers/mockdata';
// Helper imports
import moment from 'moment';
import { Card } from '../components/Elements'
import { Event } from '../components/EventCard'
import { ScrollView, TouchableOpacity } from 'react-native'

export interface Id{
  eventID: number
}

export default function EventDetails ({route}: any){
  const {eventID}:Id = route.params;
  const [ event, setEvent] = React.useState<Event>(events[eventID]);

  useMemo(() => {setEvent(events[eventID])}, [eventID]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={event.name} isSubPage={true}/>
      <ScrollView style={{flex: 1}}>
        <ImageContainer status={event.status}/>
        <View style={styles.eventInfoContainer}>
          <Text style={styles.organizerName}>{event.organizer}</Text>
          <Text style={styles.dateText}>{moment(event.date).format('lll')}</Text>
          <Text style={styles.locationText}>{event.location}</Text>
          <Text style={styles.capacityText}>Lugares disponibles: <Text style={styles.innerText}>{event.capacity} / {event.maxCapacity}</Text></Text>
        </View>
        <View style={styles.eventDescriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción</Text>
          {/* TODO: Refactor the shadow generator to be compatible with iOS devices */}
          <Card style={styles.detailsCard} shadowDepth={10}>
            <Text style={styles.descriptionText}>{event.description}</Text>
          </Card>
        </View>
        <View>
          <Text style={styles.titleGuests}>Invitados</Text>
          {event.guests.map(guest => 
            <GuestCard guestName={guest}/>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Inscribirme</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  eventInfoContainer: {
    flex: 1,
    alignItems: "center"
  },
  eventDescriptionContainer: {
    flex: 2,
    marginHorizontal: 15,
    fontWeight: "bold",
    paddingVertical: 20,
    alignItems: "center"
  },
  detailsCard: {
    paddingVertical: 20
  },
  organizerName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#445068",
    paddingBottom: 8,
    paddingTop: 8
  },
  dateText: {
    color: "#445068",
    paddingBottom: 8
  },
  capacityText: {
    fontSize: 13
  },
  locationText: {
    color: "#445068",
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 8
  },
  innerText: {
    color: "#BD4455"
  },
  descriptionTitle:{
    color: "#63ACAA",
    fontWeight: "bold",
    paddingBottom: 4
  },
  descriptionText: {
    marginHorizontal: 10,
    textAlign: "justify"
  },
  titleGuests: {
    marginLeft: 10,
    color: "#445068",
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 10
  },
  buttonContainer:{
    position: "absolute",
    bottom: 15,
    width: Dimensions.get('window').width,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#63ACAA',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 100,
  },
  buttonText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  }
});