import React, { useState } from 'react'
import News from '../api/client'
import { usePaginatedQuery } from 'react-query'
import StoryItem from '../components/StoryItem/StoryItem'
import styled from 'styled-components'

const List = styled.ul`
	padding-inline-start: 0;
	margin-block-start: 0;
	background-color: #f6f6ef;
`

const Home = () => {
	const [page, setPage] = useState(0)

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
				<List>
					{resolvedData!.map((story, i) => (
						<StoryItem key={story.id} index={i + 1} story={story} />
					))}
				</List>
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
