import {Link as RouterLink} from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
 <AuthLayout title='Create Account'>


        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                type="text"
                placeholder="Enter your name here..."
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="email"
                type="email"
                placeholder="Enter your email adress here..."
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="Pasword"
                fullWidth
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt:1 }}>
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  Create Account
                </Button>
              </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Don't have an account yet?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
              Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
 </AuthLayout>
  
  );
};
