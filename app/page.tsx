import PocketBase from 'pocketbase';
import Create from './notes/create';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


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
            <Box>
                <Typography variant="h4" gutterBottom>
                Notes
                </Typography>
            </Box>
            <Grid container spacing={2}>
            {
                notes.map((note) => {
                    return <Note key={note.id} note={note} />
                })
            }
            </Grid>
            <br></br>
            <Create />
        </div>
    );
}

function Note({note}: any) {
    const {id, title, content, created, edited} = note || {};
    return (
        <Grid key={id} xs={12} sm={6} md={4} lg={3}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {edited}
                    </Typography>
                    <Typography variant="body2">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={'/notes/'+id}>Ver</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}