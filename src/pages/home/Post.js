import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../../common/Copyright';
import { useHistory, useParams } from "react-router-dom";
import { getUserById, me } from '../../api/api-user';
import { Card, List } from '@mui/material';
import Profile from './Profile';
import NavMenu from './NavMenu';
import Post from './Post';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import { getComments, getPostById, writeComment } from '../../api/api-posts';
import FullPost from './FullPost';
import PageLoading from '../../common/PageLoading';
import { useEffect } from 'react';
import CreateComment from './CreateComment';
import CommentItem from './CommentItem';

const theme = createTheme();

export default function PostPage() {
    const params = useParams();
    const [post, setPost] = React.useState();
    const [user, setUser] = React.useState();
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        Promise.all([
            getPostById(params.postId),
            getUserById(params.userId),
            getComments(params.postId)
        ]).then(array => {
            setPost(array[0].data);
            setUser(array[1].data);
            setComments(array[2].data);
            setLoading(false);
        });
    },
        []
    );

    const onCreateComment = (comment) => {
        var newComments = [...comments];
        newComments.unshift(comment);
        setComments(newComments);
    }

    const onDeleteComment = (commentId) => {
        setComments(comments.filter(it => it.id !== commentId));
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid item xs={12} md={6}>
                    <Card >
                        {post && user ?
                            <>
                                <FullPost post={post} user={user} />
                                <CreateComment postId={post.id} onPostCreated={onCreateComment} />
                                <List>
                                    {comments.map(comment => {
                                        return <CommentItem comment={comment} onCommentDeleted={onDeleteComment} key={comment.id} />;
                                    })}
                                </List>
                            </>
                            :
                            <PageLoading open={loading} />
                        }
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}