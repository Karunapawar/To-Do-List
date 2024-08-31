import React from 'react';

function TodoList(props) {
  return (
    <div>
      <li className="list-item mx-3 my-2">
        <span>{props.item}</span>
        <span className="icons">
          <i
            className="fa-solid fa-trash icon-delete"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
