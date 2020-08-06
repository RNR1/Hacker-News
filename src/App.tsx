import React, { useState } from 'react'
import { usePaginatedQuery } from 'react-query'

import Layout from './components/Layout'
import News from './api/client'
import StoryItem from './components/StoryItem'
import { StoryList, Item, Button } from './styles/Styled'

function App() {
	const [page, setPage] = useState(1)
	const fetchStories = (key: string, page = 1) => News.topStories(30, page)

	const { isLoading, isError, error, resolvedData } = usePaginatedQuery(
		['fetchTopStories', page],
		fetchStories
	)
	return (
		<Layout>
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : isError ? (
					<div>Error: {error!.message!}</div>
				) : (
					<StoryList>
						{resolvedData!.map((story) => (
							<StoryItem key={story.id} index={story.index} story={story} />
						))}
						<Item>
							<Button onClick={() => setPage((old) => old + 1)}>More</Button>
						</Item>
					</StoryList>
				)}
			</div>
		</Layout>
	)
}

export default App
