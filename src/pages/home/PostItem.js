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
    const post = props.post;
    return (
        <Card sx={{ p: 3, m: 1 }}>
            <Grid item container>
                <Grid xs={3} sm={2}
                    item
                    justifyContent="start"
                >                    <Avatar
                        sx={{ width: 64, height: 64 }}
                        alt={props.user.name}
                        src={props.user.imageLink}
                    />
                </Grid>
                <Grid item xs={9} sm={10}>
                    <Typography variant="h5" gutterBottom>
                        {post.authorName}
                    </Typography>
                    <Typography>{post.content}</Typography>

                    <Typography>Written: {post.createdAt}</Typography>
                    {/* <IconButton aria-label="delete"  color="primary">
                        <DeleteIcon />
                    </IconButton> */}
                </Grid>
            </Grid>
        </Card>
    );
}
