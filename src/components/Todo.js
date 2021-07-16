import React, { Component } from 'react';
import './todo.css';
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolists: [
        { id: 1, title: 'react' },
        { id: 2, title: 'study' },
        { id: 3, title: 'todos' },
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
        text: '',
      });
      console.log();
    };
    const deleteList = listId => {
      this.setState({
        todolists: [
          ...this.state.todolists.filter(list => list.id !== parseInt(listId)),
        ],
      });
    };

    return (
      <div className="navContainer">
        <ul className="">
          <h1>Todolist</h1>
          {this.state.todolists.map((list, id) => (
            <li key={id}>
              {list.title}
              <button onClick={() => deleteList(list.id)}>{`삭제`}</button>
            </li>
          ))}
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

        {/* setState(prev => {

        const temp = [...prev,addSomeValue] 
        const arr1 = [1,2,3];
        let arr2 = [];

          
          return(prev)
        }) */}
      </div>
    );
  }
}
export default Todo;
