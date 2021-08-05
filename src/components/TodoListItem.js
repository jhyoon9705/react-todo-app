import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="TodoListItem">
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
      <div className="text">todo</div>

      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
      </div>
    </div>
  );
};

export default TodoListItem;
