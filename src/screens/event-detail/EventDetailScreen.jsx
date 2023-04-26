import React, { useContext, useState } from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import * as Print from 'expo-print'
import { shareAsync } from 'expo-sharing'

import { Carousel, Map, ButtonEvent } from '../../components'
import { UserContext } from '../../contexts/UserContext'
import { styles } from './EventDetailScreen.styles'
import { COLORS } from '../../utils/theme'

export const EventDetailScreen = ({ route }) => {
  const { item } = route.params
  const { currentUser } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false)

  const html = `
            <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
              <style type="text/css">
                  body{
                      text-align: center;
                      width: 500px;
                      border-radius: 1px;
                      border-color: black;
                      border: 1px black solid;
                      padding: 1rem;
                      height: 400px;
                  }
                  div{
                      font-weight: normal;
                      color: black;
                  }
                  h3{
                      display:flex; 
                      flex-direction: row;
                      color: #E73446;
                  }
                  header{
                      background-color: #E73446;
                  }
                  h5{
                      font-size: 10px;
                  }
                  .title{
                      font-size: 30px; 
                      font-family: Helvetica Neue; 
                      font-weight: bold;
                      color: #f1f1f1;
                  }
              </style>  
          </head>
            <header>
              <h1 class="title">${item.title}</h1>
            </header>
            <body>  
              <h3>
                  Dónde se realiza:
                  <div>${item.location}</div>
              </h3>
              <h3>
                  Duración:
                  <div>${item.date}</div>
              </h3>
              <p>
                  <div>${item.description}</div>
              </p>
              <h5>Grupo 11 - Diaz Jorge, Corimayo Fernando y Diaz Alfredo</h5>
            </body>
          </html>`

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({ html })
    console.log('File has been saved to:', uri)
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
  }
  return (
    <ScrollView style={styles.container}>
      <Carousel images={item.images} />
      <View style={styles.textContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={printToFile}
        >
          <Ionicons name='share-social' size={30} color='black' />
        </TouchableOpacity>
        <Text style={styles.textInfo}>DURACIÓN</Text>
        <Text style={styles.subTitle}>{item.date}</Text>
        <Text style={styles.textInfo}>¿DÓNDE SE REALIZA?</Text>
        <Text style={styles.subTitle}>{item.location}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      {!currentUser && (
        <View style={styles.textContainer}>
          <Text style={styles.textInfo}>Para mas información Inicia Sesión</Text>
        </View>
      )}
      {currentUser && (
        <>
          <View style={styles.containerButton}>
            <Link style={styles.webButton} to={{ screen: 'EventDetailWeb', params: { url: item.url } }}>
              <Ionicons name='globe-outline' size={20} color='black' />
              Ir a la web
            </Link>
            <ButtonEvent
              text='Ubicación'
              onPress={() => setModalVisible(true)}
            />
          </View>
          <Modal
            animationType='slide'
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.containerModal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name='close' size={30} color={COLORS.primary} />
              </TouchableOpacity>
              <Map
                title={item.title}
                latitude={item.locationCoordinates.latitude}
                longitude={item.locationCoordinates.longitude}
              />
            </View>
          </Modal>
        </>
      )}
    </ScrollView>
  )
}
