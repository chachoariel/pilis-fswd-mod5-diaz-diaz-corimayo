import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventListScreen.styles'
import { data } from '../../api/data'
import { SearchBar } from '../../components/SearchBar'

export const EventListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvents = data.filter(location => (
    location.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ))
  const event = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('EventDetail', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images[0]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </Pressable>
  )
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={event}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
