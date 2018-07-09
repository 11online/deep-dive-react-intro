import React, { Component } from 'react';

class Todo extends Component {

  render() {
    const {todo, toggleTodo, index, deleteTodo} = this.props
    return (
      <div className="Todo">
        {
          todo.complete
            ?
              <div>
                <strike>{todo.todo}</strike>&nbsp;
                <button onClick={() => toggleTodo(index)}>Mark Incomplete</button>&nbsp;
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            :
              <div>
                {todo.todo}&nbsp;
                <button onClick={() => toggleTodo(index)}>Mark Complete</button>
              </div>
        }
      </div>
    );
  }
}

export default Todo;
