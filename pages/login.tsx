import * as React from 'react';
import { useAuth } from '../hooks';
import { useRouter } from 'next/router';

export default function LoginPage () {
    const  router = useRouter()

    const { profile, login, logout} =  useAuth({
        revalidateOnMount: false,
    })
    async function handleLoginClick () {
        try {
            await login()
            console.log('redirect to dasboard');
            router.push('/about')
        } catch (error) {
            console.log('failed to login ', error)
        }
    }
    // async function handleGetProfileClick () {
    //     try {
    //         await authApi.getProfile()
    //         await logout()
    //         console.log('redirect to login page');
    //     } catch (error) {
    //         console.log('fail to get profile ', error)
    //     }
    // }
    async function handleLogoutClick () {
        try {
            await logout()
            console.log('redirect to login page');
        } catch (error) {
            console.log('fail to logout ', error)
        }
    }

  return (
    <div>
        <h1>Login page </h1>
        <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
        <button onClick={handleLoginClick}>Login</button>
        {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
        <button onClick={handleLogoutClick}>Logout</button>
        <button onClick={()=> router.push('/about')}>Go to about</button>
    </div>
  );
}
