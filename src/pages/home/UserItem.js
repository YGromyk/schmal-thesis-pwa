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
import { follow } from '../../api/api-user';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function UserItem(props) {
    const user = props.user;
    const followUser = (toFollow) => {
        console.log("trynna follow");
        follow(toFollow.id).then((data) => {
            toFollow.followedByMe = true;
        })
    }
    return (
        <Card sx={{ p: 1, m: 1 }} >
            <Grid item container>
                <Grid xs={3} sm={2}
                    item
                    justifyContent="start">
                    <Link to={`/users/${props.user.id}`} >
                        <Avatar
                            sx={{ width: 64, height: 64 }}
                            alt="Remy Sharp"
                            src={user.imageLink}
                        />
                    </Link>
                </Grid>
                <Grid item xs={5} sm={6}>
                    <Link to={`/users/${props.user.id}`} >

                        <Typography variant="h6" gutterBottom>
                            {user.email}
                        </Typography>
                        <Typography>{user.description}</Typography>
                    </Link>

                </Grid>
                <Grid item xs={4} sm={3} sx={{ display: 'flex' }} justifyContent="flex-end">
                    {user.followedByMe ?
                        <Button type="submit" variant="outlined" onClick={() => followUser(user)}>Unfollow</Button> :
                        <Button type="submit" variant="contained" onClick={() => followUser(user)}>Follow</Button>
                    }
                </Grid>
            </Grid>
        </Card >
    );
}
