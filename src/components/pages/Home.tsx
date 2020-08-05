import React, { useState } from 'react'
import News from '../api/client'
import { usePaginatedQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

const Home = () => {
	const [page, setPage] = useState(0)
	const history = useHistory()

	const fetchStories = (key: string, page = 0) => News.topStories(30, page * 30)

	const {
		isLoading,
		isError,
		error,
		resolvedData,
		isFetching
	} = usePaginatedQuery(['fetchTopStories', page], fetchStories)
	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error: {error!.message!}</div>
			) : (
				<div>
					{resolvedData!.map((story) => (
						<p key={story.id} onClick={() => history.push(story.id.toString())}>
							{story.title}
						</p>
					))}
				</div>
			)}
			<span>Current Page: {page + 1}</span>
			<button
				onClick={() => setPage((old) => Math.max(old - 1, 0))}
				disabled={page === 0}>
				Previous Page
			</button>{' '}
			<button onClick={() => setPage((old) => old + 1)}>Next Page</button>
			{isFetching ? <span> Loading...</span> : null}{' '}
		</div>
	)
}

export default Home
