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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Copyright from '../../common/Copyright';
import { useNavigate } from 'react-router-dom';
import ErrorAlert from '../../common/ErrorAlert';
import PageLoading from '../../common/PageLoading';
import { Backdrop, CircularProgress } from '@mui/material';
import { register } from '../../api/api';

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = React.useState();
  const [open, setOpen] = React.useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setOpen(true);
    register({
      email: data.get('email'),
      nickname: data.get('nickname'),
      password: data.get('password'),
      gender: data.get('gender-group'),
      birthday: data.get('birthday')
    })
      .catch(error => {
        console.log(error);
        setOpen(false);
        setError(error.response.data);
      })
      .then(response => {
        setOpen(false);
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="nickname"
                  required
                  fullWidth
                  id="nickname"
                  label="Nickname"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} spacing={1}>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender-group"
                >
                  <FormControlLabel xs={3} md={12} value="female" control={<Radio />} label="Female" />
                  <FormControlLabel xs={3} md={12} value="male" control={<Radio />} label="Male" />
                  <FormControlLabel xs={3} md={12} value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  name='birthday'
                  defaultValue="2017-05-24"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <ErrorAlert error={error} />
              </Grid>
              <PageLoading open={open}/>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}