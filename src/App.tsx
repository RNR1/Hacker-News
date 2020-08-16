import React, { useState } from 'react'
import { usePaginatedQuery } from 'react-query'
import styled from 'styled-components'

import Layout from './components/Layout'
import News from './api/client'
import StoryItem from './components/StoryItem'

const StoryList = styled.ul`
	padding-inline-start: 0;
	margin-block-start: 0;
	background-color: #f6f6ef;

	& li {
		list-style: none;
		padding-top: 7px;
	}

	& button {
		border: none;
		background-color: transparent;
		margin-left: 34px;
		margin-top: 5px;
		padding: 10px;
	}
`

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
						<li>
							<button onClick={() => setPage((old) => old + 1)}>More</button>
						</li>
					</StoryList>
				)}
			</div>
		</Layout>
	)
}

export default App
