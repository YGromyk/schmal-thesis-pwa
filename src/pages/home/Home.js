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
import { useHistory } from "react-router-dom";
import { me } from '../../api/api-user';
import { Card, List } from '@mui/material';
import Profile from './Profile';
import NavMenu from './NavMenu';
import Post from './Post';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import { getMyPosts } from '../../api/api-posts';
import { useMeState } from '../../storage/store';

const theme = createTheme();

export default function Home() {
    const meState = useMeState((state) => state.me);
    const setMe = useMeState(state => state.initiate)
    const [posts, setPosts] = React.useState([])
    const updateMeAndReturn = () => {
        return me()
            .then((data) => {
                setMe(data.data);
                return data.data;
            })

    }
    React.useEffect(() => async function () {
        var me = await updateMeAndReturn();
        const postsData = await getMyPosts(me.id);
        setPosts(postsData.data);
    }, []);

    const updatePosts = (post) => {
        updateMeAndReturn();
        var newPosts = [...posts];
        newPosts.unshift(post);
        console.log(newPosts);
        setPosts(newPosts);
    }


    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid item xs={12} md={6}>
                    <Card >
                        <Profile user={meState} />
                    </Card>
                    <CreatePost user={meState} onPostCreated={updatePosts} />
                    <List>
                        {posts.map((post, i) => {
                            return <PostItem key={post.id} user={meState} post={post}/>;
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