import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
        super();
        this.state = {
          todos: todos
        }
      }

      toggleItem = (id) => {
            const newTodos = this.state.todos.map(item => {
              if (item.id === id) {
                return {
                  ...item,
                  completed: !item.completed
                }
              } else {
                return (item);
              }
            });
        
            this.setState({
              todos: newTodos
            });
          }
        
          addItem = (task) => {
            const newItem = {
              task:task,
              id:Date.now(),
              completed: false
            };
            
            this.setState({
              todos: [...this.state.todos, newItem]
            })
          }
        
          clearCompleted = () => {
            const newTodo = this.state.todos.filter(item => {
              return(item.completed === false);
            });
            console.log(newTodo)

            this.setState({
              todos: newTodo
            })

          }

          
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div>
          <TodoList   toggleItem={this.toggleItem} todos={this.state.todos} />        
        <TodoForm clearCompleted={this.clearCompleted} addItem={this.addItem}/>
        </div>
      </div>
        
    );
  }
}

export default App;


