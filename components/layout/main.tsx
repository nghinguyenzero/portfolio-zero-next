import { LayoutProps } from '@/models'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Box, Container, Stack } from '@mui/material'
// import { Footer, Header } from '../common'
import { Footer } from '../common'
import dynamic from 'next/dynamic'


export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting')

		return () => console.log('MainLayout unmounting')
	}, [])

	// const Header = dynamic(() => import('../common/header').then((mod) => mod.Header), { ssr: false })
	const Header = dynamic(() => import('../common/header'), { ssr: false })


	return (
		<Stack minHeight='100vh'>
			<Header/>
			<Box component='main' flexGrow={1}>
				{/* <Container 
					maxWidth='sm' 
					sx={{bgcolor:'primary.main'}}
				> SM</Container>

				<Container 
					maxWidth='md' 
					sx={{bgcolor:'primary.main'}}
				>MD</Container> */}
				{/* <Link href="/" legacyBehavior>
					<a>Home</a>
				</Link>

				<Link href="/blog" legacyBehavior>
					<a>Blog</a>
				</Link>
				<Link href="/works" legacyBehavior>
					<a>Works</a>
				</Link> */}
			
				{children}
			</Box>
			<Footer/>
		</Stack>
	)
}
