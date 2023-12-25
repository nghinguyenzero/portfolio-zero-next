import { Seo } from '@/components/common/seo'
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models/common'
import { Box } from '@mui/material'
import { useRouter } from 'next/dist/client/router'
import { title } from 'process'

const Home: NextPageWithLayout = () => {
	const router = useRouter()

	// function goToDetailPage() {
	// 	router.push({
	// 		pathname: '/posts/[postId]',
	// 		query: {
	// 			postId: 123,
	// 			ref: 'social',
	// 		},
	// 	})
	// }

	return (
		<Box>
			<Seo data={{
				title: 'NextJs Potifolo NghiNV',
				description: 'Template NextJs Potifolo NghiNV',
				thumbnailUrl: 'https://drive.google.com/file/d/1ow9xLxXDo7eJdhAhQSUKXtcc0-fm9z1k/view',
				url: 'https://zero-next-six.vercel.app/',
			}}/>
			<HeroSection/>
			<RecentPosts/>
			<FeaturedWorks/>
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
