import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Work } from '@/models';
import { WorkList } from '../work';

export function FeaturedWorks () {
    const workList : Work[] = [
		{
			id: '1',
			title: 'Creating a portfolio web application',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Portfolio'],
			shortDescription:
				'Designing a sleek and professional interface to showcase personal or professional projects and achievements. Implementing features such as project galleries, contact forms, and resume downloads to effectively highlight skills and experiences.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/duyg0ybch/image/upload/v1710487125/utpo3k9b7u2mdw0nisjn.jpg',
		},
		{
			id: '2',
			title: 'Developing an e-commerce web application',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Ecommerce'],
			shortDescription:
				'Building a user-friendly interface for online shopping. Integrating features such as a shopping cart, checkout, and user account management.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/duyg0ybch/image/upload/v1710487949/scvpzb63dafcpp6usudz.jpg',
		},
		{
			id: '3',
			title: 'Building a dashboard or management application',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Admin', 'dashboard'],
			shortDescription:
				'Developing a customizable and user-friendly interface for displaying data and management information. Ensuring interactivity and adaptability to different devices and screen sizes.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/duyg0ybch/image/upload/v1710487260/oz1ia5wkki6rnn9kbzlt.jpg',
		},
		{
			id: '4',
			title: 'Creating a news or blog website',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Admin', 'dashboard'],
			shortDescription:
				'Designing a simple and modern interface for reading articles and interacting with content. Optimizing the website for mobile devices and enhancing user experience.',
			fullDescription: '',
			thumbnailUrl:
				'https://res.cloudinary.com/duyg0ybch/image/upload/v1710486918/g8mudrrmtg0gyo0bsrsy.jpg',
		},
		{
			id: '5',
			title: 'Developing a social networking platform',
			createdAt: '1648363391671',
			updatedAt: '1648363391671',
			tagList: ['Admin', 'dashboard'],
			shortDescription:
				'Building an intuitive and interactive interface for connecting users and sharing content. Incorporating features like user profiles, news feeds, and messaging systems to foster community engagement and communication.',
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
