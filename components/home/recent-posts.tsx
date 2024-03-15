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
            title: 'Vue 👨🏽‍💻',
            publishedDate: '2022-06-18T10:00:00Z',
            tagList: ['Reactive Binding', 'Component-based'],
            description: `A progressive JavaScript fw for building user interfaces. It offers a simple and flexible approach to front-end development with its reactive data binding and component-based architecture. Vue.js is known for its gentle learning curve, making it suitable for both beginners and experienced developers. It is often praised for its simplicity & performance.`
        },
        {
            id: 2,
            slug: '',
            title: 'React ⚛️',
            publishedDate: '2022-06-18T10:00:00Z',
            tagList: ['JSX Syntax','Component-based'],
            description: `Developed by Facebook, is a popular JavaScript library for building user interfaces. It emphasizes the component-based architecture, allowing developers to create reusable UI components. With its virtual DOM and JSX syntax, React.js enables efficient rendering and seamless updates, making it ideal for building dynamic web applications.`
        },
        {
            id: 3,
            slug: '',
            title: 'Angular 🅰️',
            publishedDate: '2022-06-18T10:00:00Z',
            tagList: ['Two-way binding', 'Dependency-injection'],
            description: `A comprehensive front-end framework developed by Google. It offers a full-fledged solution for building single-page applications with features like two-way data binding and dependency injection. Angular's structured approach and extensive ecosystem make it suitable for large-scale and complex projects.`
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
                spacing={3}
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
