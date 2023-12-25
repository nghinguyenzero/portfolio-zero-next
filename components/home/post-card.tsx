import { Post } from '@/models';
import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import * as React from 'react';
import { PostItem } from '../blog';

export interface PostCardProps {
  post: Post
}

export function PostCard ({post}: PostCardProps) {
  if(!post) return null
  
  return (
    <Card>
        <CardContent>
          <PostItem post={post}/>
            <Typography variant='h5' fontWeight='bold'>
              {post.title}
            </Typography>

            <Stack direction='row' my={2}>
              <Typography variant='body1'>
                {/* {format(+post.publishDate, 'dd MMM yyyy')} */}
				        {format(new Date(post.publishedDate), 'dd MMM yyyy')}

              </Typography>
              
              <Divider orientation='vertical' sx={{mx :2}} flexItem/>

              <Typography variant='body1'> {post.tagList.join(', ')}</Typography>
            </Stack>

            <Typography variant='body2'>{post.description}</Typography>

        </CardContent>
    </Card>
  );
}
