import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './ButtonEvent.styles'
import { COLORS } from '../../utils/theme'

export const ButtonEvent = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: COLORS.primary
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: '#f1f1f1'
        }}
      >{text}
      </Text>
    </TouchableOpacity>
  )
}
