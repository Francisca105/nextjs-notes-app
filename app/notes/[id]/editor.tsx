'use client';

import PocketBase from 'pocketbase';
import Button from '@mui/material/Button';
import { Alert, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export const dynamic = 'auto',
dynamicParams = true,
revalidate = 0,
fetchCache = 'auto',
runtime = 'nodejs',
preferredRegion = 'auto'
  
const pb = new PocketBase('http://127.0.0.1:8090');

export default async function Note({note}: any) {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    const del = async () => {
        try {
            await pb.collection('notes').delete(note.id);
            setAlert({ type: 'success', message: 'Note deleted' });
        } catch (error) {
            setAlert({ type: 'error', message: 'Something went wrong' });
        }
    }

    const edit = async () => {
        try {
            await pb.collection('notes').update(note.id, { title, content })
            setAlert({ type: 'success', message: 'Note updated' });
        } catch (error) {
            setAlert({ type: 'error', message: 'Something went wrong' });
        }
    }

    return (
        <Box>
            <div>
            <TextField
                required
                id="standard-required"
                label="Title"
                defaultValue={title}
                variant='standard'
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div>
            <TextField
                required
                id='standard-multiline-static'
                variant='standard'
                rows={5}
                multiline
                label="Content"
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
            />
            </div>
            <br></br>
            <ButtonGroup>
                <Button onClick={edit}>
                    <EditIcon />
                </Button>
                <Button onClick={del}>
                    <DeleteIcon />
                </Button>
            </ButtonGroup>
            <br></br>
            {alert && (
                <Alert 
                severity={alert.type} 
                style={{ maxWidth: '225px' }}
                onClose={() => {setAlert(null)}}>
                    {alert.message}
                    </Alert>
            )}
        </Box>
    )
}