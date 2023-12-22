import { Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Post } from '@/models';

export function RecentPosts () {
    const postList : Post[] = [
        {
            id: 1,
            title: 'Making a title for demo',
            publishDate: '1703261774633',
            tagList: ['Roomate', 'Friend'],
            description: ' description description description  description description description description description description description description description'
        },
        {
            id: 2,
            title: 'Making a title for demo',
            publishDate: '1703261774633',
            tagList: ['Figma', 'Icon'],
            description: 'description, description, description  description description description description description description description description description'
        }

    ]
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
                { postList.map( post => (
                    <Box key={post.id}>
                        <PostCard post={post}></PostCard>
                    </Box>
                    ))
                }
                

                {/* <Box>
                    <PostCard></PostCard>
                </Box> */}

            </Stack>
        </Container>

    </Box>
  );
}
