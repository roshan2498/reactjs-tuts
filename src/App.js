// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const App = () => {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     console.log("effect");
//     axios.get("http://localhost:3001/notes").then((response) => {
//       console.log("promise fulfilled");
//       setNotes(response.data);
//     });
//   }, []);
//   console.log("render", notes.length, "notes");

//   const addNote = (event) => {
//     event.preventDefault();
//     const noteObject = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() > 0.5,
//       id: notes.length + 1,
//     };

//     setNotes(notes.concat(noteObject));
//     setNewNote("");
//   };

//   const handleNoteChange = (event) => {
//     console.log(event.target.value);
//     setNewNote(event.target.value);
//   };

//   const notesToShow = showAll ? notes : notes.filter((note) => note.important);

//   return (
//     <div className="App">
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? "important" : "all"}
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map((note) => (
//           <Note key={note.id} note={note} />
//         ))}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange} />
//         <button type="submit">save</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "./components/Content";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setAllCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    if (newFilter) {
      const regex = new RegExp(newFilter, "i");
      const filteredCountries = () =>
        allCountries.filter((country) => country.name.match(regex));
      setCountries(filteredCountries);
    }
  };

  return (
    <div className="App">
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;
