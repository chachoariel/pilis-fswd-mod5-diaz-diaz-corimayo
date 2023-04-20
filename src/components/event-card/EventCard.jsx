import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import { styles } from './EventCard.styles'

export const EventCard = ({ event, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `https://drive.google.com/uc?id=${event.images[0]}` }} style={styles.itemImage} />
        <View style={styles.containerDate}>
          <Text style={styles.itemDate}>{event.date}</Text>
        </View>
        <Text style={styles.itemTitle}>{event.title}</Text>
      </View>
    </Pressable>
  )
}
