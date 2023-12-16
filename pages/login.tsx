import * as React from 'react';
import { useAuth } from '../hooks';

export default function LoginPage () {

    const { profile, login, logout} =  useAuth({
        revalidateOnMount: false,
    })
    async function handleLoginClick () {
        try {
            await login()
            console.log('redirect to dasboard');
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
        } catch (error) {
            console.log('fail to logout ', error)
        }
    }

  return (
    <div>
        <h1>Login page {JSON.stringify(profile || {}, null, 4)}</h1>
        <button onClick={handleLoginClick}>Login</button>
        {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
