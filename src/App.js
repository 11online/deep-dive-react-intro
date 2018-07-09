import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Todo from './Todo.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          todo: "Feed dog",
          complete: false
        },
        {
          todo: "Do React talk",
          complete: false
        }
      ],
      newTodo: ''
    }
  }

  toggleTodo = (index) => {
   const todos = this.state.todos
   todos[index].complete = !todos[index].complete
   this.setState({todos})
  }

  addTodo = (event) => {
    event.preventDefault()
    const todo = this.state.newTodo
    const todos = this.state.todos
    todos.push({todo, complete: false})
    this.setState({todos, newTodo: ''})
  }

  newTodoOnChange = (event) => {
    this.setState({newTodo: event.target.value})
  }

  deleteTodo = (index) => {
    const todos = this.state.todos
    todos.splice(index, 1)
    this.setState({todos})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Amazing Todo List</h1>
        </header>
        <div className="App-intro">
          {
            this.state.todos.map((todo, index) => {
              return (
                <Todo
                  key={index}
                  deleteTodo={this.deleteTodo}
                  index={index}
                  todo={todo}
                  toggleTodo={this.toggleTodo}
                />
                )
            })
          }
        </div>
        <hr/>
        <div>
          <form onSubmit={this.addTodo}>
            <input onChange={this.newTodoOnChange} value={this.state.newTodo}/>
            <button type='Submit'>Add Todo</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
