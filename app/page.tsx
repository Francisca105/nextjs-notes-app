import Link from 'next/link';
import PocketBase from 'pocketbase';
import Create from './notes/create';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getNotes() {
    return await pb.collection('notes').getFullList();
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h1>Notes</h1>
            {
                notes.map((note) => {
                    return <Note key={note.id} note={note} />
                })
            }
            <Create />
        </div>
    );
}

function Note({note}: any) {
    const {id, title, content, created} = note || {};
    return (
        <Link href={`/notes/${id}`}>
            <h2>{title}</h2>
            <p>{content}</p><br></br><br></br>
            <p>{created}</p>
        </Link>
    )
}