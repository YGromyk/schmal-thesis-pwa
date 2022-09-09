import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Card, Grid, TextField } from '@mui/material';
import { createPost } from '../../api/api-posts';

export default function CreatePost(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        createPost({
            content: data.get('post')
        });
    };
    const post = {
        authorPhoto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
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
                        alt={props.user.name}
                        src={props.user.imageLink}
                    />
                </Grid>
                <Grid item xs={9} sm={10}>
                    <TextField
                        name="post"
                        sx={{ width: '100%' }}
                        id="outlined-multiline-static"
                        label="Let us know what you think of"
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
