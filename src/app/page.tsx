"use client";
import NoteForm from "../components/NoteForm";
import { useNotes } from "@/context/NoteContext";
import { useEffect } from "react";
import { Note } from "@/interfaces/note.interface";
import NoteCard from "@/components/NoteCard";

function HomePage() {
  const { notes, loadNotes } = useNotes();
  console.log(notes);

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        {" "}
        <NoteForm />
        <h1
          className=" text-3xl font-bold text-blue-600 my-4
        ">
          Notes
        </h1>
        <div>
          {notes.map((note: Note) => (
            <NoteCard note={note} key={note.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
