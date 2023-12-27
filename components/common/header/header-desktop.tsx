import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useAuth } from '@/hooks'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTE_LIST } from './routes'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
    const router = useRouter()

    const { profile, logout} = useAuth()

    const isLogged = Boolean(profile?.username)
    const routeList = ROUTE_LIST.filter(route => !route.requireLogin === isLogged)
    // const [routeList, setRouteList] = useState(() =>
	// 	ROUTE_LIST.filter((route) => !route.requireLogin)
	// )

	// server render menu not require login (A)
	// client - first render menu not require login (B)
	// client - useEffect render second time menu requireLogin

	// useEffect(() => {
	// 	// after the first render
	// 	// calc routeList and setRouteList
	// 	setRouteList(ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn))
	// }, [isLoggedIn])

	return <Box display={{ xs:'none', md:'block'}} py={2} >
        <Container>
            <Stack direction='row' justifyContent='flex-end'>
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
