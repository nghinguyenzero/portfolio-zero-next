import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../api-client";

export function useAuth (options?: Partial<PublicConfiguration>) {

    const { data: profile, error, mutate} = useSWR('/profile', {
        delupingInterval: 60*60*1000,
        revalidateOnFocus: true,
        ...options
    })
    console.log({profile, error});
     const firstLoading = profile === undefined && error === undefined

    async function login() {
        await authApi.login({
            username: "nghinv",
            password: "nghinv"
        })
        await mutate()
    }

    async function logout() {
        await authApi.logout()
        await mutate(null, false)
    }

    return { 
        profile, error , login, logout, firstLoading
    }

}