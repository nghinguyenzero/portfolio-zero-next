import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from '@/hooks'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTE_LIST } from './routes'

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
    const router = useRouter()

    const { profile, logout} = useAuth()

    const isLogged = Boolean(profile?.username)
    const routeList = ROUTE_LIST.filter(route => !route.requireLogin === isLogged)

	return <Box display={{ xs:'block', md:'none'}}>
                <Container>
            <Stack direction='row' justifyContent='flex-end' my={2}>
            {routeList.map((route) =>(
                <Link key={route.path} href={route.path} passHref legacyBehavior>
                    <MuiLink 
                    className={ clsx({active: router.pathname === route.path})} 
                        sx={{ ml:2 }}
                    >{route.label}</MuiLink>
                </Link>
            ))}
            {!isLogged && (
                <Link href='/login' passHref legacyBehavior>
                    <MuiLink 
                        sx={{ ml:2, fontWeight:'medium' }}
                    >Login</MuiLink>
                </Link>
            )}
            {isLogged && (
                <MuiLink 
                    sx={{ ml:2, fontWeight:'medium', cursor:'pointer' }}
                    onClick={logout}
                    
                >Logout</MuiLink>
            )}
            </Stack>
        </Container>
    </Box>
}
