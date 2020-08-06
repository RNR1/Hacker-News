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

const Item = styled.li`
	list-style: none;
	padding-top: 7px;
`

const Button = styled.button`
	border: none;
	background-color: transparent;
	margin-left: 34px;
	margin-top: 5px;
	padding: 10px;
`

const Home = () => {
	const [page, setPage] = useState(1)

	const fetchStories = (key: string, page = 1) => News.topStories(30, page)

	const { isLoading, isError, error, resolvedData } = usePaginatedQuery(
		['fetchTopStories', page],
		fetchStories
	)
	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : isError ? (
				<div>Error: {error!.message!}</div>
			) : (
				<List>
					{resolvedData!.map((story) => (
						<StoryItem key={story.id} index={story.index} story={story} />
					))}
					<Item>
						<Button onClick={() => setPage((old) => old + 1)}>More</Button>
					</Item>
				</List>
			)}
		</div>
	)
}

export default Home
