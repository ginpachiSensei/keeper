import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";



function App() {
  return (
    <>
    <Header />
    {notes.map(noteItems =>
        <Note
          key = {noteItems.key}
          title = {noteItems.title}
          content = {noteItems.content}
        />
    )}
    <Footer />
    </>
  );
}

export default App;
