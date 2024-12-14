import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

const API_URL = 'http://localhost:7070/notes';

type NoteType = {
  id: number;
  content: string;
};

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get<NoteType[]>(API_URL);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async (content: string) => {
    try {
      await axios.post(API_URL, { id: 0, content });
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="app">
      <h1>Notes</h1>
      <NoteForm onAdd={addNote} />
      <div className="notes">
        {notes.map((note) => (
          <Note key={note.id} id={note.id} content={note.content} onDelete={deleteNote} />
        ))}
      </div>
      <button className="refresh-button" onClick={fetchNotes}>
        🔄 Refresh
      </button>
    </div>
  );
};

export default App;