import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todo: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: '#CD5C5C',
    fontSize: 26,
  },
  completed: {
    backgroundColor: 'whitesmoke',
  },
})

export default class List extends Component {
  renderItem = (todo, i) => {
    const { removeTodo, toggleTodo } = this.props
    const todoStyle = todo.completed ? [styles.todo, styles.completed] : styles.todo

    return (
      <View key={i} style={todoStyle}>
        <Text> {todo.text} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={todo.completed}
            onToggle={() => toggleTodo(i)}
          />
          <TouchableOpacity onPress={() => removeTodo(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render () {
    const { todos } = this.props

    return (
      <ScrollView style={styles.container}>
        {todos.map(this.renderItem)}
      </ScrollView>
    )
  }
}
