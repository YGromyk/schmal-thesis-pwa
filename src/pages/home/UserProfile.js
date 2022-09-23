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
import { getMyPosts } from '../../api/api-posts';
import PageLoading from '../../common/PageLoading';

const theme = createTheme();

export default function UserProfile() {
    const params = useParams();
    const [user, setData] = React.useState([])
    const [posts, setPosts] = React.useState([])
    const [loading, setLoading] = React.useState(true);


    getUserById(params.userId).then((data) => {
        setData(data.data);
        return data.data;
    }).then(user => {
        getMyPosts(user.id).then((data) => {
            setPosts(data.data);
            setLoading(false);
        })
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid item xs={12} md={6}>
                    <PageLoading open={loading} />
                    <Card >
                        <Profile user={user} />
                    </Card>
                    <List>
                        {posts.map((post, i) => {
                            return <PostItem user={user} post={post} key={i} />;
                        })}
                    </List>
                </Grid>
                <Grid item xs={12}>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}