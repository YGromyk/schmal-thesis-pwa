import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PostItem(props) {
    console.log(props);
    const post = {
        authorPhoto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        authorName: props.author,
        date: new Date(props.post.createdAt),
        content: props.post.content
    };
    return (
        <Card sx={{ p: 3, m: 1 }}>
            <Grid item container>
                <Grid xs={3} sm={2}
                    item
                    justifyContent="start"
                >                    <Avatar
                        sx={{ width: 64, height: 64 }}
                        alt="Remy Sharp"
                        src={post.authorPhoto}
                    />
                </Grid>
                <Grid item xs={9} sm={10}>
                    <Typography variant="h5" gutterBottom>
                        {post.authorName}
                    </Typography>
                    <Typography>{post.content}</Typography>

                    <Typography>Written: {post.date.toDateString()}</Typography>
                    {/* <IconButton aria-label="delete"  color="primary">
                        <DeleteIcon />
                    </IconButton> */}
                </Grid>
            </Grid>
        </Card>
    );
}
