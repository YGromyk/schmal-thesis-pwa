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
import { Card } from '@mui/material';
import Profile from './Profile';
import { ContentCutOutlined } from '@mui/icons-material';
import NavMenu from './NavMenu';
import Post from './Post';

const theme = createTheme();

export default function Home() {
    const [user, setData] = React.useState([])
    React.useEffect(() => {
        me().then((data) => {
            setData(data.data);
        })
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid item xs={12} md={6}>
                    <Card >
                        <Profile user={user} />
                    </Card>

                    <Post />
                </Grid>
                <Grid item xs={12}>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}