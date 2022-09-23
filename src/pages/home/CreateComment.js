import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Card, Grid, TextField } from '@mui/material';
import { createPost, writeComment } from '../../api/api-posts';
import { useMeState } from '../../storage/store';

export default function CreateComment(props) {
    const meState = useMeState((state) => state.me);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        writeComment(
            props.postId,
            data.get('comment')
        ).then((post) => {
            props.onPostCreated(post.data);
            event.target.reset()
        });
    };
    return (
        <Card sx={{ p: 2, m: 1 }}>
            <Grid
                item
                container
                component="form"
                onSubmit={handleSubmit}
                noValidate
            >
                <Grid xs={3} sm={2}
                    item
                    justifyContent="start"
                >
                    <Avatar
                        sx={{ width: 64, height: 64 }}
                        alt={meState.name}
                        src={meState.imageLink}
                    />
                </Grid>
                <Grid item xs={9} sm={10}>
                    <TextField
                        name="comment"
                        sx={{ width: '100%' }}
                        id="outlined-multiline-static"
                        label="What do you think of that post?"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Grid sx={{ p: 1 }} container justifyContent="flex-end">
                        <Button type="submit" variant="contained">Post</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );
}
