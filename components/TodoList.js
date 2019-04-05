import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoList extends Component {
  render() {
    const { id, name } = this.props.todo;
    return (
      <ul>
        <li>
          {" "}
          {name}
          <button onClick={this.props.delTodo.bind(this, id)}>&times;</button>
        </li>
        <style jsx>{`
          button {
            padding: 5px;
            width: 40px;
            margin: 0 0 0 60px;
          }
          ul {
            list-style: none;
          }
        `}</style>
      </ul>
    );
  }
}

TodoList.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoList;
