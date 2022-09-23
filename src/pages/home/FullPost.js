import { Avatar, Button, Card, Grid, Typography } from '@mui/material';
import { FavoriteOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { dislikePost, likePost } from '../../api/api-posts';
import { useMeState } from '../../storage/store';


export default function FullPost(props) {
    var [post, changePost] = React.useState(props.post);
    var user = props.user;
    const meState = useMeState((state) => state.me);
    const onLike = () => {
        likePost(post.id)
            .then(data => {
                changePost(data.data);
            });
    }
    const onDislike = () => {
        dislikePost(post.id)
            .then(data => {
                changePost(data.data);
            });
    }
    return (
        <Card sx={{ minHeight: '30%' }}>
            <Grid container>
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
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Link to={`/users/${props.user.id}/post/${post.id}`} >
                        <Typography>Written: {post.createdAt}</Typography>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} container justifyContent="flex-end">

                    <Button variant={post.likedByMe ? 'contained' : 'outlined'}
                        endIcon={post.likedByMe ? <FavoriteIcon /> : <FavoriteOutlined />}
                        onClick={post.likedByMe ? onDislike : onLike}
                    >
                        {post.likesCount}
                    </Button>
                </Grid>
            </Grid>
        </Card >

    );
}