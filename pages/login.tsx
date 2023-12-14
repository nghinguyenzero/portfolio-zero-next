import * as React from 'react';
import { authApi } from "@/api/auth-api";

export default function LoginPage () {
    async function handleLoginClick () {
        try {
            await authApi.login({
                username: 'nghinv1',
                password: 'nghinv1',
            })
        } catch (error) {
            console.log('fail to login ', error)
        }
    }
    async function handleGetProfileClick () {
        try {
            await authApi.getProfile()
        } catch (error) {
            console.log('fail to get profile ', error)
        }
    }
    async function handleLogoutClick () {
        try {
            await authApi.logout()
        } catch (error) {
            console.log('fail to logout ', error)
        }
    }

  return (
    <div>
        <h1>Login page</h1>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleGetProfileClick}>Get profile</button>
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
