'use client';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import PocketBase from 'pocketbase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
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

    // const router = useRouter();

    const create = async () => {
        await pb.collection('notes').create({ title, content });
        // router.reload();
    }

    return (
        <form onSubmit={create}>
            <Box>
                <Typography variant="h4" gutterBottom>
                Create a new note
                </Typography>
            </Box>
            {/* <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            /> */}
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
                //   defaultValue="Default Value"
                variant="standard"
                onChange={(e) => setContent(e.target.value)}
                />
            </div>
            
            {/* <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            /> */}
            {/* <button type="submit">Create</button> */}
            <br></br>
            <Button variant="outlined" type="submit">Create</Button>
            
        </form>
    )
}