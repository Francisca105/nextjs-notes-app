'use client';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import PocketBase from 'pocketbase';

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
            <h3>Create a new note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Create</button>
        </form>
    )
}