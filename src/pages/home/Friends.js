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
import { followers, followings, me } from '../../api/api-user';
import { Card, List, ListItem, Tab, Tabs } from '@mui/material';
import Profile from './Profile';
import { ContentCutOutlined } from '@mui/icons-material';
import NavMenu from './NavMenu';
import Post from './Post';
import PropTypes from 'prop-types';
import UserItem from './UserItem';


const theme = createTheme();

export default function Friends() {
    const [followersData, setFollowersData] = React.useState([])
    React.useEffect(() => {
        followers().then((data) => {
            setFollowersData(data.data);
        })
    }, []);

    const [followingsData, setFollowingssData] = React.useState([])
    React.useEffect(() => {
        followings().then((data) => {
            setFollowingssData(data.data);
        })
    }, []);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid item xs={12} md={6}>
                    <Tabs value={value} onChange={handleChange} >
                        <Tab label="Followings" />
                        <Tab label="Followers" />
                    </Tabs>

                    <TabPanel value={value} index={0}>
                        {followersData.map(it => <UserItem user={it}/>)}
                    
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    {followingsData.map(it => <UserItem user={it}/>)}
                    </TabPanel>
                </Grid>
                <Grid item xs={12}>
                    <Copyright sx={{ mt: 5 }} />
                </Grid>

            </Grid>
        </ThemeProvider>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};