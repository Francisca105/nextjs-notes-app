import Link from 'next/link';
import PocketBase from 'pocketbase';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getNote(id: any) {
    return await pb.collection('notes').getOne(id, {});
}

export default async function NotesPage({params}: any) {
    const note = await getNote(params.id);
    return (
        <div>
            <h1>Note/{params.id}</h1>
            <div className='note'>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <p>{note.created}</p>
            </div>           
        </div>
    );
}