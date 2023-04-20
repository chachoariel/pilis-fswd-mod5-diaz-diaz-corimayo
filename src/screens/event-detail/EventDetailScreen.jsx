import React, { useContext } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Link } from '@react-navigation/native'

import { Carousel, Map } from '../../components'
import { UserContext } from '../../contexts/UserContext'
import { styles } from './EventDetailScreen.styles'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <Carousel images={item.images} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.eventName}>{item.location}</Text>
        {currentUser && (
          <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: item.url } }}>
            Ir a la web
          </Link>
        )}
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {currentUser && (
        <Map
          title={item.title}
          latitude={item.locationCoordinates.latitude}
          longitude={item.locationCoordinates.longitude}
        />
      )}
    </ScrollView>
  )
}
