import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './Map.styles'

export const Map = ({ title, latitude, longitude }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002
      }}
    >
      <Marker
        coordinate={{
          latitude,
          longitude
        }}
        title={title}
      />
    </MapView>
  )
}
