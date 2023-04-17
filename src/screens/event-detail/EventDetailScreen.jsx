import React, { useContext } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { Link } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './EventDetailScreen.styles'
import { UserContext } from '../../contexts/UserContext'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.images.map((image, idx) => (
            <Image
              key={idx}
              source={{ uri: `https://drive.google.com/uc?id=${image}` }}
              style={styles.image}
              resizeMode='cover'
            />
          ))}
        </ScrollView>
      </View>
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
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: item.locationCoordinates.latitude,
            longitude: item.locationCoordinates.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002
          }}
        >
          <Marker
            coordinate={{
              latitude: item.locationCoordinates.latitude,
              longitude: item.locationCoordinates.longitude
            }}
            title={item.title}
          />
        </MapView>
      )}
    </ScrollView>
  )
}
