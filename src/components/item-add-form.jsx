import React, { memo, useRef } from "react";
import style from "../styles/item-add-form.module.css";

const ItemAddForm = memo((props) => {
  const inputRef = useRef();

  console.log("애드폼 렌더링");
  const onSubmit = (event) => {
    event.preventDefault();
    const itemName = inputRef.current.value;
    itemName && props.onAdd(itemName);
    inputRef.current.value = "";
  };

  return (
    <form className={style["add-form"]} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={style["add-input"]}
        placeholder="Type item"
      />
      <button className={style["add-button"]}>Add</button>
    </form>
  );
});

export default ItemAddForm;
