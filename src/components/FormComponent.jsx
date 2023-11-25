import { useState } from "react";

/* eslint-disable */
export const FormComponent = ({ note, handelSubmit, handelChanges }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              name="title"
              onChange={handelChanges}
              value={note.title}
              placeholder="Title"
            />
          )}
          <textarea
            name="content"
            onClick={() => setIsExpanded(true)}
            onChange={handelChanges}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          <button
            type="button"
            onClick={handelSubmit}
            className={isExpanded ? "active" : ""}
          >
            <img
              style={{ width: "1.8rem", aspectRatio: 1 }}
              src="assets/plus-icon.svg"
              alt="Plus svg"
            />
          </button>
        </form>
      </div>
    </>
  );
};
