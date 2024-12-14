import React, { useState } from 'react';

type NoteFormProps = {
  onAdd: (content: string) => void;
};

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [newNote, setNewNote] = useState('');

  const handleAdd = () => {
    if (!newNote.trim()) return;
    onAdd(newNote);
    setNewNote('');
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Enter your note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default NoteForm;