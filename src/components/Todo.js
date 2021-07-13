import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolists: [
        { id: 0, title: 'react' },
        { id: 1, title: 'study' },
        { id: 2, title: 'todos' },
      ],

      text: '',
    };
  }

  render() {
    // console.log(this.state.text);

    const addTodoList = e => {
      e.preventDefault();
      console.log('submit action');
      this.setState();
    };

    const addList = () => {
      this.setState({
        todolists: [
          ...this.state.todolists,
          { id: this.state.todolists.length + 1, title: this.state.text },
        ],
      });
    };

    return (
      <div className="navContainer">
        <ul className="">
          <h1>Todolist</h1>
          {this.state.todolists.map((list, id) => (
            <li key={id}>{list.title}</li>
          ))}
          -------------
          <form onSubmit={addTodoList}>
            <input
              type="text"
              value={this.state.text}
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
            />
            <button onClick={addList}>{`생성`}</button>
          </form>
        </ul>
      </div>
    );
  }
}
export default Todo;
