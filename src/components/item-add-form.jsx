import React, { memo } from "react";

const ItemAddForm = memo((props) => {
  const inputRef = React.createRef();

  console.log("애드폼 렌더링");
  const onSubmit = (event) => {
    event.preventDefault();
    const itemName = inputRef.current.value;
    itemName && props.onAdd(itemName);
    inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Type item"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default ItemAddForm;
