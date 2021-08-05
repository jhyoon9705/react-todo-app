import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>

      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        <div className="text">
          {text}
          <div className="icon">
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
