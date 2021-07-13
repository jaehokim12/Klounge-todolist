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
      menu: [
        { id: 0, title: '생성' },
        { id: 1, title: '버튼' },
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
            <button type="submit">{`delete`}</button>
          </form>
        </ul>
        {/* 입력받은값을 생성버튼을눌러 새로운스테이트값으로저장

                     삭제버튼을 누르면  */}
      </div>
    );
  }
}
export default Todo;
