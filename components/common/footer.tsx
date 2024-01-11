import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import * as React from 'react'


export function Footer() {
	const socialLinks = [
		{ icon: Facebook, url: 'https://facebook.com' , color: '#0866FF'},
		{ icon: YouTube, url: 'https://youtube.com' , color: '#FF0000'},
		{ icon: Instagram, url: 'https://instagram.com', color: '' },
		{ icon: Twitter, url: 'https://twitter.com', color: '#1DA1F2' },
		{ icon: LinkedIn, url: 'https://linkedIn.com', color: '#0a66c2' },
	]

	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction="row" justifyContent="center">
				{socialLinks.map((item, idx) => (
					<Box
						key={idx}
						component="a"
						p={2}
						href={item.url}
						target="_blank"
						rel="noopener noreferre" // useing when href -> new tab
					>
						<Icon component={item.icon} sx={{ fontSize: 48,  color: item.color}}						
						/>
					</Box>
				))}
			</Stack>

			<Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
		</Box>
	)
}
