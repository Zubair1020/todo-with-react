import { FormComponent } from "../../components/FormComponent.jsx";
import { useState } from "react";
import { NoteComponent } from "../../components/NoteComponent.jsx";

export const HomeRoute = () => {
  const INITIAL_NOTE = {
    title: "",
    content: "",
    id: 0,
  };
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(INITIAL_NOTE);
  const [isUpdate, setIsUpdate] = useState(false);
  const handelChanges = (e) => {
    const { name, value } = e.target;
    const id = isUpdate ? note.id : new Date().getMilliseconds();
    setNote((prevState) => ({
      ...prevState,
      id: id,
      [name]: value,
    }));
  };
  const handelSubmit = () => {
    if (!isUpdate) setNotes((prevState) => [...prevState, note]);
    else {
      setNotes((prevState) =>
        prevState.map((prevNote) =>
          prevNote.id === note.id ? note : prevNote,
        ),
      );
      setIsUpdate(false);
    }
    setNote(INITIAL_NOTE);
  };
  const handelDelete = (itemToBeDeleteId) =>
    setNotes((prevState) =>
      prevState.filter((note) => note.id !== itemToBeDeleteId),
    );
  const updateNote = (id) => {
    const toBeUpdatedNote = notes.find((note) => note.id === id);
    setIsUpdate(true);
    setNote(toBeUpdatedNote);
  };

  return (
    <>
      <header>
        <h1>Take a note</h1>
      </header>
      <main>
        <FormComponent
          note={note}
          handelSubmit={handelSubmit}
          handelChanges={handelChanges}
        />
        <section className="list-container">
          {notes &&
            notes.map((note, index) => (
              <NoteComponent
                key={index}
                note={note}
                handelDelete={handelDelete}
                updateNote={updateNote}
              />
            ))}
        </section>
      </main>
    </>
  );
};
