import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';

export function RecentPosts () {
  return (
    <Box component='section' bgcolor='secondary.light' pt={2} pb={4}>
        <Container>
            <Stack 
                direction='row' 
                mb={2} 
                justifyContent={{ xs :'center', md: 'space-between'}} 
                alignItems='center'
            >
                <Typography variant='h5'>Recent Posts</Typography>
                <Link passHref href='/blog' legacyBehavior>
                    <MuiLink sx={{ display: {
                        xs: 'none',
                        md: 'inline'
                    }}}>View all</MuiLink>
                </Link>
            </Stack>
            <Stack direction={{
                xs: 'column',
                md: 'row'
            }} 
                spacing={4}
                sx={{
                    '&>div': {
                        width: {
                            xs: '100%',
                            md: '50%'
                        }

                    }
                }}
            >
                <Box>
                    <PostCard></PostCard>
                </Box>
                <Box>
                    <PostCard></PostCard>
                </Box>

            </Stack>
        </Container>

    </Box>
  );
}
