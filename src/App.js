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
            const newTodos = this.state.todos.filter(item => {
              return(item.completed === false);
            });
        
        
            this.setState({
              todos: newTodos
            })
          }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div>
          <TodoList clearCompleted={this.clearCompleted} toggleItem={this.toggleItem} todos={this.state.todos} />        
        <TodoForm addItem={this.addItem}/>
        </div>
      </div>
        
    );
  }
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom';

// import GroceryList from './components/GroceryList';
// import ListForm from './components/ListForm';
// import './styles.scss';

// const groceries = [
//   {
//     name: 'Bananas',
//     id: 123,
//     purchased: false
//   },


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       groceries: groceries
//     }
//   }

//   toggleItem = (id) => {
//     const newGroceries = this.state.groceries.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           purchased: !item.purchased
//         }
//       } else {
//         return (item);
//       }
//     });

//     this.setState({
//       groceries: newGroceries
//     });
//   }

//   addItem = (title) => {
//     const newItem = {
//       name:title,
//       id:this.state.groceries.length,
//       purchased: false
//     };
    
//     this.setState({
//       groceries: [...this.state.groceries, newItem]
//     })
//   }

//   clearPurchased = () => {
//     const newGroceries = this.state.groceries.filter(item => {
//       return(item.purchased === false);
//     });


//     this.setState({
//       groceries: newGroceries
//     })
//   }

//   // Class methods to update state
//   render() {
//     return (
//       <div className="App">
//         <div className="header">
//            <h1>Shopping List</h1>
//            <ListForm addItem={this.addItem}/>
//          </div>
//         <GroceryList clearPurchased={this.clearPurchased} toggleItem={this.toggleItem} groceries={this.state.groceries} />
//        </div>
//     );
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);