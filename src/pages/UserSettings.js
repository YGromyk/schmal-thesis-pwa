import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';
import Image from 'mui-image'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavMenu from './home/NavMenu';
import PageLoading from '../common/PageLoading';
import Copyright from '../common/Copyright';
import { useMeState } from '../storage/store';
import { Box } from '@mui/system';
import { Avatar, Button, CardMedia, FormControlLabel, Radio, RadioGroup, Snackbar, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { updateProfile, uploadFoto } from '../api/api-user';


const theme = createTheme();

export default function UserSettings() {
    const meState = useMeState((state) => state.me);
    const setMe = useMeState(state => state.initiate)

    const [selectedFile, setSelectedFile] = useState();
    const [localImage, setChosenImage] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [showSnackbar, setSnackbar] = useState(false);

    const [tempMeState, setTempMeState] = useState({ ...meState });
    const onChangeUser = () => {
        const profile = {
            sex: tempMeState.sex,
            email: tempMeState.email,
            name: tempMeState.name,
            description: tempMeState.description
        };
        updateProfile(profile)
            .then(user => {
                setMe(user.data);
                setTempMeState(user.data);
            });

    };

    const handlesexChange = (event) => {
        var sexString = event.target.value;
        console.log(sexString);
        var sex = tempMeState.sex;
        if (sexString.localeCompare("Male") === 0)
            sex = 0;
        else if (sexString.localeCompare("Female") === 0)
            sex = 1;
        else sex = 2;

        setTempMeState({ ...tempMeState, sex: sex });
        console.log(tempMeState);
    }
    const changeHandler = (event) => {
        setSnackbar(false);
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        setChosenImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmission = () => {
        uploadFoto(selectedFile).then(() => {
            setSnackbar(true);
        })
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} justifyContent="center">
                <NavMenu />
                <CssBaseline />
                <Grid p={3} container xs={12} md={8}>
                    <Stack
                        container
                        justifyContent="center"
                        direction="column"
                        xs={12}
                        md={4}>

                        <Image
                            width={300}
                            alt={meState.email} l
                            src={isFilePicked ? localImage : meState.imageLink}
                        />

                        <Button
                            variant="contained"
                            component="label"
                        >
                            Choose File
                            <input
                                type="file"
                                hidden
                                onChange={changeHandler}
                            />
                        </Button>
                        <Button disabled={!isFilePicked} onClick={handleSubmission} variant="contained" component="label">
                            Upload
                        </Button>
                        <Snackbar
                            open={showSnackbar}
                            autoHideDuration={6000}
                            message="Profile updated!"
                        />
                    </Stack>

                    <Grid
                        container
                        p={2}
                        xs={12}
                        md={6}
                        spacing={3}
                    >
                        <Grid item>
                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                inputProps={tempMeState.email}
                                defaultValue={meState.email}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                item
                                label="Name"
                                id="name"
                                name="name"
                                inputProps={tempMeState.name}
                                defaultValue={meState.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                id="description"
                                name="description"
                                inputProps={tempMeState.description}
                                defaultValue={meState.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={meState.sex}
                                name="sex-group"
                            >
                                <FormControlLabel onChange={handlesexChange} xs={3} md={12} value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel onChange={handlesexChange} xs={3} md={12} value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel  onChange={handlesexChange} xs={3} md={12} value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={onChangeUser}
                                type="button"
                                variant="contained"
                            >
                                Save changes
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Copyright sx={{ mt: 5 }} />
            </Grid>
        </ThemeProvider>
    );

}