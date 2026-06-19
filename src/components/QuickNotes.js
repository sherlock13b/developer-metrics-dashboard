import React, { useState, useEffect } from 'react';
import '../styles/notes.css';

function QuickNotes() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('dashboard_notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    localStorage.setItem('dashboard_notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (!inputText.trim()) return;

    const newNote = {
      id: Date.now(),
      text: inputText.trim(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInputText('');
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  return (
    <div className="notes-card">
      <h3>Quick Notes</h3>

      <div className="notes-input-group">
        <input
          type="text"
          placeholder="Enter a note..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button onClick={handleAddNote}>
          Add Note
        </button>
      </div>

      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="notes-item">
            <span>{note.text}</span>

            <button
              onClick={() => handleDeleteNote(note.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickNotes;