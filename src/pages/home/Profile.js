import { Avatar, Grid, Typography } from "@mui/material";


export default function Profile(props) {
    var user = props.user;

    return <>
        <Grid
            item
            container
            sx={{ height: '80%' }}
            justifyContent="center"
        >
            <Avatar
                sx={{ width: 128, height: 128 }}
                alt={user.email}
                src={user.imageLink}
            />
        </Grid>
        <Grid
            container
            justifyContent="center">
            <Typography>{user.email}</Typography>
        </Grid>
        <Grid
            container
            justifyContent="center">
            <Typography>Deep shit</Typography>
        </Grid>
        <Grid
        sx={{ pb: 2}}
            container
            justifyContent="center">
            <Grid item xs={4}
                justifyContent="center"
                container
            >
                <Typography>
                    {user.postsCount} posts
                </Typography>
            </Grid>
            <Grid item xs={4}
                container
                justifyContent="center">
                <Typography>
                    {user.followersCount} followers
                </Typography>
            </Grid>
            <Grid item xs={4}
                container
                justifyContent="center">
                <Typography>
                    {user.followingsCount} followings
                </Typography>
            </Grid>
        </Grid>
    </>;
}