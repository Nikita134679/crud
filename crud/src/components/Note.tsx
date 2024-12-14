import React from 'react';

type NoteProps = {
  id: number;
  content: string;
  onDelete: (id: number) => void;
};

const Note: React.FC<NoteProps> = ({ id, content, onDelete }) => {
  return (
    <div className="note">
      <span>{content}</span>
      <button onClick={() => onDelete(id)}>✖</button>
    </div>
  );
};

export default Note;