import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import { getMyPosts } from '../../api/api-posts';

export default function Post() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        getMyPosts().then((data) => {
            setPosts(data.data);
        })
    }, []);
    return (
        <>
            <CreatePost />
            <List>
                {posts.map((post, i) => {
                    return <PostItem post={post} key={i} />;
                })}
            </List>
        </>
    );
}
