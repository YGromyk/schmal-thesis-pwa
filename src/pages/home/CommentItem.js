import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Card, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Link } from 'react-router-dom';
import { dislikePost, likePost, removeComment } from '../../api/api-posts';
import { useState } from 'react';

export default function CommentItem(props) {
    const comment = props.comment;
    const remove = () => {
        removeComment(comment.postId, comment.id)
            .then(() => props.onCommentDeleted(comment.id));
    };
    return (
        <Card sx={{ p: 3, m: 1 }}>
            <Grid container>
                <Grid item xs={3} sm={3}>
                    <Avatar
                        sx={{ width: 64, height: 64 }}
                        alt={comment.username}
                        src={comment.imageLink}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" gutterBottom>
                        @{comment.username}
                    </Typography>
                    <Typography>{comment.content}</Typography>
                </Grid>


                <Grid item container justifyContent="flex-end">

                    {comment.isMine ?
                        <Button variant='contained'
                            endIcon={<DeleteIcon />}
                            onClick={remove}
                        />
                        : <></>
                    }
                </Grid>
            </Grid>
        </Card>

    );
}
