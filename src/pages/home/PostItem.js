import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Card, Grid } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { Link } from 'react-router-dom';
import { dislikePost, likePost } from '../../api/api-posts';
import { useState } from 'react';

export default function PostItem(props) {
    const [post, setPost] = useState(props.post);
    const onLike = () => {
        likePost(post.id)
            .then(data => {
                setPost(data.data);
            });
    }
    const onDislike = () => {
        dislikePost(post.id)
            .then(data => {
                setPost(data.data);
            });
    }
    return (
        <Card sx={{ p: 3, m: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={3} sm={3}>
                    <Avatar
                        sx={{ width: 64, height: 64 }}
                        alt={props.user.name}
                        src={props.user.imageLink}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h5" gutterBottom>
                        @{props.user.name}
                    </Typography>
                    <Typography>{post.content}</Typography>
                    <Link to={`/users/${props.user.id}/post/${post.id}`} >
                        <Typography>Written: {post.createdAt}</Typography>
                    </Link>
                </Grid>
                <Grid item container justifyContent="flex-end">

                    <Button variant="contained" endIcon={<AddCommentIcon />}>
                        {post.commentCounts}
                    </Button>

                    <Button variant={post.likedByMe ? 'contained' : 'outlined'}
                        endIcon={post.likedByMe ? <FavoriteIcon /> : <FavoriteOutlined />}
                        onClick={post.likedByMe ? onDislike : onLike}
                    >
                        {post.likesCount}
                    </Button>
                </Grid>
            </Grid>
        </Card>

    );
}
