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
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
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
                    {user.followersCount} subscribed
                </Typography>
            </Grid>
            <Grid item xs={4}
                container
                justifyContent="center">
                <Typography>
                    {user.followingsCount} subscribed
                </Typography>
            </Grid>
        </Grid>
    </>;
}