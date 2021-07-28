import React, { useState } from 'react';

function Todohook() {
  const [todolists, setTodolist] = useState([
    { id: 0, title: 'react' },
    { id: 1, title: 'study' },
    { id: 2, title: 'todos' },
  ]);
  const [inputvalue, setInputvalue] = useState('');
  const deletlist = e => {
    setTodolist([...todolists.filter(lists => lists.id != e.target.value)]);
  };
  const addList = e => {
    setTodolist([
      ...todolists,
      { id: todolists.length + 1, title: e.target.value },
    ]);
    setInputvalue('');
  };

  return (
    <div>
      <div>
        {todolists.map(list => (
          <ul>
            <li>
              {list.title}
              <button value={list.id} onClick={deletlist}>
                삭제
              </button>
            </li>
          </ul>
        ))}
      </div>
      <div>
        <input
          value={inputvalue}
          onChange={e => {
            setInputvalue(e.target.value);
          }}
        ></input>
        <button value={inputvalue} onClick={addList}>
          전송
        </button>
      </div>
    </div>
  );
}

export default Todohook;
