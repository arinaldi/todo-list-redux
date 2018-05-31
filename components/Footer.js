import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  remove: {
    color: '#CD5C5C',
  },
})

export default class Footer extends Component {
  render () {
    const { removeCompleted } = this.props

    return (
      <TouchableOpacity style={styles.footer} onPress={removeCompleted}>
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
