import React, { useState } from 'react';

function Todohook() {
  const [todolists, setTodolist] = useState([
    { id: 0, title: 'react' },
    { id: 1, title: 'study' },
    { id: 2, title: 'todos' },
  ]);
  const [inputvalue, setInputvalue] = useState('');
  const deletlist = listId => {
    const result = [...todolists.filter(lists => lists.id !== listId)];
    setTodolist(result);
  };
  const addList = inputValue => {
    const result = [
      ...todolists,
      { id: todolists.length + 1, title: inputValue },
    ];
    setTodolist(result);
    setInputvalue('');
  };

  const handleInputText = e => {
    setInputvalue(e.target.value);
  };

  return (
    <div>
      <div>
        {todolists.map((list, index) => (
          <ul key={list.id}>
            <li>
              {list.title}
              <button onClick={() => deletlist(list.id)}>삭제</button>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <input value={inputvalue} onChange={handleInputText}></input>
        <button onClick={() => addList(inputvalue)}>전송</button>
      </div>
    </div>
  );
}

export default Todohook;
