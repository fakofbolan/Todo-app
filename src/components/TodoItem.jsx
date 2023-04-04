import React from "react";

export const TodoItem = (props) => {
  const handleChange = () => {
    props.onMarkItemAsDone(props.id, props.done);
  };

  const handleClick = () => {
    props.onDeleteItem(props.id);
  };
  return (
    <div key={props.id}>
      <input type="checkbox" checked={props.done} onChange={handleChange} />
      {props.text} ({new Date(props.createdAt).toLocaleString()})
      <button type="button" onClick={handleClick}>
        X
      </button>
    </div>
  );
};
