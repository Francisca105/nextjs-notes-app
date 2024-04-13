'use client';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import PocketBase from 'pocketbase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

const pb = new PocketBase('http://127.0.0.1:8090');

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const create = async () => {
        await pb.collection('notes').create({ title, content });
    }

    return (
        <form onSubmit={create}>
            <Box>
                <Typography variant="h4" gutterBottom>
                Create a new note
                </Typography>
            </Box>
            <div>
                <TextField
                required
                id="standard-required"
                label="Title"
                variant="standard"
                rows={5}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            
            <div>
                <TextField
                required
                id="standard-multiline-static"
                label="Content"
                multiline
                rows={4}
                variant="standard"
                onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <br></br>
            <Button variant="outlined" type="submit">Create</Button>
            
        </form>
    )
}