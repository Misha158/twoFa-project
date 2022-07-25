import React, { useEffect, useRef, useState } from "react";
import "./style.css";

export const Cell = ({ cellId }) => {
  const [cellValue, setCellValue] = useState("test");
  const [isEditMode, setIsEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabeltoInput = () => {
    setIsEditMode(true);

    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const changeInputToLabel = () => setIsEditMode(false);

  const onClickOutsideInputHandler = (event) => {
    if (event.target?.dataset?.cellId !== "2") {
      changeInputToLabel();
    }
  };

  const onDefocusInputHandler = (event) => {
    if (event.key === "Enter") {
      setIsEditMode(false);
    }
  };

  const updateCellValueState = (event) => setCellValue(event.target.value);

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);

    return document.removeEventListener("click", onClickOutsideInputHandler);
  });

  return isEditMode ? (
    <input
      className="cellInput"
      ref={inputRef}
      data-cell-id={"2"}
      value={cellValue}
      onChange={updateCellValueState}
      onKeyDown={onDefocusInputHandler}
    />
  ) : (
    <div className="cellLabel" data-cell-id={"2"} onClick={changeLabeltoInput}>
      {/*{evaluatedCellValueState}*/}
      {cellValue}
    </div>
  );
};
