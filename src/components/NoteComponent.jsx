/* eslint-disable */
import { useState } from "react";

export const NoteComponent = ({
  note: { title, content, id },
  handelDelete,
  updateNote,
}) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <>
      <div className="note">
        <h1 style={{ textDecoration: isComplete ? "line-through" : "" }}>
          {title}
        </h1>
        <p style={{ textDecoration: isComplete ? "line-through" : "" }}>
          {content}
        </p>
        <button type="button" onClick={() => handelDelete(id)}>
          <img src="assets/delete-icon.svg" alt="delet bin" />
        </button>
        <button
          className="edit-btn"
          type="button"
          onClick={() => updateNote(id)}
        >
          <img src="assets/edit-icon.png" alt="edit btn" />
        </button>
        <button
          className="done-btn"
          type="button"
          onClick={() => setIsComplete(!isComplete)}
        >
          <img src="assets/check-icon.svg" alt="checked btn" />
        </button>
      </div>
    </>
  );
};
