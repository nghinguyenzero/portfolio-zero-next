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
            slug: '',
            title: 'Love 💗',
            publishedDate: '2022-06-18T10:00:00Z',
            tagList: ['Family', 'Friend',],
            description: `Love is an intricate dance of emotions, weaving connections between hearts. It's a boundless force, nurturing souls, transcending barriers, and painting life with hues of passion, tenderness, and understanding.`
        },
        {
            id: 2,
            slug: '',
            title: 'Hope 🍀',
            publishedDate: '2022-06-18T10:00:00Z',
            tagList: ['Light', 'Faith'],
            description: `Hope is the beacon amid darkness, a whisper of possibility when all seems lost. It fuels resilience, kindles dreams, and breathes life into aspirations, offering solace, strength, and unwavering optimism.`
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
