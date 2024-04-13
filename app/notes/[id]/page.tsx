import PocketBase from 'pocketbase';
import Editor from './editor'
import { redirect } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getNote(id: any) {
    try {
        return await pb.collection('notes').getOne(id, {});
    } catch (error) {
        redirect('/');
    }
}

export default async function NotesPage({params}: any) {
    const note = await getNote(params.id);

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                Home
                </Link>
                <Link underline="hover" color="inherit" href="/">
                Notes
                </Link>
                <Typography color="text.primary">{params.id}</Typography>
            </Breadcrumbs>
            <br></br>
            <Editor note={note} />
            
        </div>
    );
}