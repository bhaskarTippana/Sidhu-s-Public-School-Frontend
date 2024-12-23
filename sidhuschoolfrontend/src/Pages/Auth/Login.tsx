import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Typography } from '@mui/material';
import landing from '../../Assets/landing.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { CustomIconButton } from '../../Components/CustomIconButton';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CustomButton } from '../../Components/CustomButton';
import { CustomTextField } from '../../Components/CustomTextField';

// CustomTextField - purely for styling, no form control logic needed



interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: 'onSubmit',  // Trigger validation on submit
  });

  // Validation rules
  const validate = {
    username: {
      required: 'Username is required',
      minLength: {
        value: 3,
        message: 'Username must be at least 3 characters',
      },
    },
    password: {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters',
      },
    },
  };

  // Toggle password visibility
  const handleClickShowPassword = () => setShowPassword(prev => !prev);

  const navigate = useNavigate();

  // Form submission handler
  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form data
    navigate('/sidebar'); // Navigate to the next page after successful login
  };

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100vh'}
      sx={{
        backgroundImage: 'url(' + landing + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4} padding={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            direction="column"
            paddingX={3}
            paddingBottom={3}
            rowSpacing={2}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}
          >
            <Grid item display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <CustomIconButton size='large'><LockOpenIcon /></CustomIconButton>
            </Grid>

            <Grid item>
              <Typography
                align="center"
                sx={{
                  fontSize: { xs: 'h6', sm: 'h5', md: 'h4' },
                  fontWeight: 'bold',
                }}
              >
                Login
              </Typography>
            </Grid>

            {/* UserName Field */}
            <Grid item>
              <Controller
                name="username"
                control={control}
                rules={validate.username}
                render={({ field }) => (
                  <CustomTextField
                    {...field}  // Spread field props into the CustomTextField
                    label="Username"
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    size="small"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <CustomIconButton size="small"><AccountCircleIcon fontSize="small" /></CustomIconButton>
                      ),
                    }}
                  />
                )}
              />
            </Grid>

            {/* Password Field */}
            <Grid item>
              <Controller
                name="password"
                control={control}
                rules={validate.password}
                render={({ field }) => (
                  <CustomTextField
                    {...field}  // Spread field props into the CustomTextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    size="small"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <CustomIconButton onClick={handleClickShowPassword} size="small">
                          {showPassword ? <VisibilityIcon fontSize="small" /> : <VisibilityOffIcon fontSize="small" />}
                        </CustomIconButton>
                      ),
                    }}
                  />
                )}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item>
              <CustomButton type="submit" fullWidth>Login</CustomButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
