"use client";
import { createContext, useState, useContext } from "react";

import { Note } from "@/interfaces/note.interface";

export const NoteContext = createContext<{
  notes: any[];
  loadNotes: () => Promise<void>;
  createNote: (note: Note) => Promise<void>;
}>({
  notes: [],
  loadNotes: async () => {},
  createNote: async () => {},
});

export const useNotes = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<any>([]);

  async function loadNotes() {
    const rest = await fetch("/api/notes");
    const dataNotes = await rest.json();
    setNotes(dataNotes);
  }

  async function createNote(note: Note) {
    await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    setNotes([...notes, note]);
  }

  return (
    <NoteContext.Provider value={{ notes, loadNotes, createNote }}>
      {children}
    </NoteContext.Provider>
  );
};
