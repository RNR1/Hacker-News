import React, { useState, FC } from 'react'
import { usePaginatedQuery } from 'react-query'

import Layout from './components/Layout'
import News from './api/client'
import StoryList from './components/StoryList'

const App: FC = () => {
	const [page, setPage] = useState(1)
	const fetchStories = async (key: string, page = 1) => {
		const data = await News.topStories(30, page)
		window.scrollTo(0, 0)
		return data
	}

	const { isLoading, isError, error, resolvedData } = usePaginatedQuery(
		['fetchTopStories', page],
		fetchStories
	)
	return (
		<Layout>
			<div>
				{isLoading ? (
					<div>Loading...</div>
				) : isError || !resolvedData ? (
					<div>Error: {error!.message}</div>
				) : (
					<StoryList list={resolvedData} setPage={setPage} />
				)}
			</div>
		</Layout>
	)
}

export default App
