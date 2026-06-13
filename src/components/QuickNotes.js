import React, { useState, useEffect } from 'react';
import '../styles/notes.css';

function QuickNotes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('dashboard_notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    localStorage.setItem('dashboard_notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    if (!inputText.trim()) return;
    setNotes([...notes, { id: Date.now(), text: inputText }]);
    setInputText('');
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="notes-card">
      <h3>System Memory Storage</h3>
      <div className="notes-input-group">
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Store persistent session keys..."
        />
        <button onClick={handleAddNote}>Commit</button>
      </div>
      <ul className="notes-list">
        {notes.map(note => (
          <li key={note.id} className="notes-item">
            <span>{note.text}</span>
            <button onClick={() => handleDeleteNote(note.id)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickNotes;