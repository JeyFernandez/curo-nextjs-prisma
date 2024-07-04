import { Note } from "@/interfaces/note.interface";
import { useNotes } from "@/context/NoteContext";

function NoteCard({ note }: { note: Note }) {
  const { deleteNote } = useNotes();
  return (
    <div
      key={note.id}
      className="bg-white p-4 my-2 rounded-md shadow-md flex justify-between items-center">
      <div>
        <h2
          className=" text-xl font-bold text-blue-600 my-2
      ">
          {note.title}
        </h2>
        <p>{note.content}</p>
      </div>
      <div className=" flex gap-x-2">
        <button
          className="bg-red-600 text-white p-2 rounded-md"
          onClick={async () => {
            if (confirm("Are you sure you want to delete this note?")) {
              await deleteNote(note.id);
            }
          }}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default NoteCard;
