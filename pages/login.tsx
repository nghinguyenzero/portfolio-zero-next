import * as React from 'react';
import { useAuth } from '../hooks';
import { useRouter } from 'next/router';
import { LoginForm } from '@/components/auth';
import { LoginPayload } from '@/models';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';

import { getErrorMessage } from '@/utils'
import { toast } from 'react-toastify'

export default function LoginPage () {
    const  router = useRouter()

    const { profile, login, logout} =  useAuth({
        revalidateOnMount: false,
    })
    // async function handleLoginClick () {
    //     try {
    //         await login({ username: 'username', password: 'password'})
    //         console.log('redirect to dasboard');
    //         router.push('/about')
    //     } catch (error) {
    //         console.log('failed to login ', error)
    //     }
    // }
    // async function handleGetProfileClick () {
    //     try {
    //         await authApi.getProfile()
    //         await logout()
    //         console.log('redirect to login page');
    //     } catch (error) {
    //         console.log('fail to get profile ', error)
    //     }
    // }
    // async function handleLogoutClick () {
    //     try {
    //         await logout()
    //         console.log('redirect to login page');
    //     } catch (error) {
    //         console.log('fail to logout ', error)
    //     }
    // }

    async function handleLoginSubmit ( payload : LoginPayload) {
            console.log('handleLoginSubmit');

        try {
            await login(payload)
            console.log('redirect to dasboard');
            router.push('/')
		} catch (error: unknown) {
			const message = getErrorMessage(error)
			toast.error(message)
        }
    }

  return (
    <Box>
        <Paper elevation={4}
            sx={{
                mx:'auto',
                mt: 8,
                p: 4,
                maxWidth: '480px',
                textAlign: 'center'
            }}
        >
            <Typography component='h1' variant='h5' mb={3}>  Page WS - Login
                <LoginForm onSubmit={handleLoginSubmit}/>
            </Typography>
        </Paper>
        {/* <h1>Login page </h1>
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
        <button onClick={()=>handleLoginClick}>Login</button>
        <button onClick={handleGetProfileClick}>Get profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
        <button onClick={()=> router.push('/about')}>Go to about</button> */}
    </Box>
  );
}
