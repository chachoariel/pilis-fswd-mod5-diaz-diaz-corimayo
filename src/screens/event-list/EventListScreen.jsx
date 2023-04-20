import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { SearchBar, EventCard } from '../../components'
import { getEventList } from '../../api/event.service'
import { styles } from './EventListScreen.styles'

export const EventListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventList, setEventList] = useState([])
  const handleSearch = (query) => {
    setSearchQuery(query)
  }
  const filteredEvents = eventList.filter(event => (
    event.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  ))
  useEffect(() => {
    getEventList().then(data => {
      setEventList(data)
    })
      .catch(err => console.log(err))
  }, [])
  const renderItem = ({ item }) => (
    <EventCard
      event={item}
      onPress={() => navigation.navigate('EventDetail', { item })}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
