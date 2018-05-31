import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/todoListRedux'
import StatusBar from '../components/StatusBar'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'

const { add, remove, toggle, removeCompleted } = actionCreators

class App extends React.Component {
  addTodo = (text) => {
    const { add } = this.props

    add(text)
  }

  removeTodo = (index) => {
    const { remove } = this.props

    remove(index)
  }

  toggleTodo = (index) => {
    const { toggle } = this.props

    toggle(index)
  }

  removeCompleted = () => {
    const { removeCompleted } = this.props

    removeCompleted()
  }

  render() {
    const { todos } = this.props

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <Title>To-Do List</Title>
        <Input
          placeholder={'Type a task, and press enter'}
          onSubmitEditing={this.addTodo}
        />
        <View style={styles.divider} />
        <List
          todos={todos}
          removeTodo={this.removeTodo}
          toggleTodo={this.toggleTodo}
        />
        <View style={styles.divider} />
        <Footer removeCompleted={this.removeCompleted} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke'
  }
});

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  add: (text) => dispatch(add(text)),
  remove: (index) => dispatch(remove(index)),
  toggle: (index) => dispatch(toggle(index)),
  removeCompleted: () => dispatch(removeCompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
