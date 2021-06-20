import React from "react";


class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleChanges = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.input);
  }

   handleClick = (e)=>{
    e.preventDefault();
    this.props.clearCompleted();
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanges} type="text" name="item" />
        <button>Add Todo</button>
        <button onClick={this.handleClick} className="clear-btn">
        Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;