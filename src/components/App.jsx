import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [detailsArray, setDetailsArray] = useState([]);

  function addNote(details) {
    setDetailsArray((prevdetails) => {
      return [...prevdetails, details];
    });
  }

  function deleteNote(id) {
    setDetailsArray((prevdetails) => {
      return prevdetails.filter((detail, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {detailsArray.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
