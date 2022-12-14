import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.
  constructor() {
    super();
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
  }

  render() {
    const { text, completed } = this.state;
    return (
      <div className="todo-item">
        <input type="checkbox" checked={completed} />
        <label>{completed && text}</label>
      </div>
    );
  }
}

export default TodoItem;
