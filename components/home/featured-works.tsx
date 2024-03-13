import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Work } from '@/models';
import { WorkList } from '../work';

export function FeaturedWorks () {
    const workList : Work[] = [
		{
			id: '1',
			title: 'FPT Information System',
			createdAt: '1577836800000',
			updatedAt: '1640995200000',
			tagList: ['React','Angular'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/easy-frontend/image/upload/v1648712410/learn-nextjs/item1_cbidwn.jpg',
		},
		{
			id: '2',
			title: 'TMA Solutions',
			createdAt: '1546300800000',
			updatedAt: '1546300800000',
			tagList: ['Illustration'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/easy-frontend/image/upload/v1648712410/learn-nextjs/item2_usidpx.jpg',
		},
		{
			id: '3',
			title: 'Hahalolo',
			createdAt: '1514764800000',
			updatedAt: '1514764800000',
			tagList: ['Backbone', 'knockout', 'knockback'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/easy-frontend/image/upload/v1648712410/learn-nextjs/item3_jlfuun.jpg',
		},
		{
			id: '5',
			title: 'FPT Software',
			createdAt: '1483228800000',
			updatedAt: '1483228800000',
			tagList: ['Fresher C++', 'dotNet', 'Angular'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/easy-frontend/image/upload/v1648712410/learn-nextjs/item3_jlfuun.jpg',
		},
    ]
  return (
    <Box component='section' pt={2} pb={4}>
        <Container>
            <Typography variant='h5' mb={4}>Featured works</Typography>
            <WorkList workList={workList}></WorkList>
        </Container>

    </Box>
  );
}
