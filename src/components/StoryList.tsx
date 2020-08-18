import React, { FC, Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import Story from '../models/Story'
import StoryItem from './StoryItem'
import useWindowWidth from '../helpers/useWindowWidth'

interface Props {
	list: Story[]
	setPage: Dispatch<SetStateAction<number>>
}

const List = styled.ul`
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

const StoryList: FC<Props> = ({ list, setPage }) => {
	const width = useWindowWidth()
	return (
		<List>
			{list.map((story) => (
				<StoryItem key={story.id} story={story} isSmallScreen={width < 750} />
			))}
			<li>
				<button onClick={() => setPage((old) => old + 1)}>More</button>
			</li>
		</List>
	)
}

export default StoryList
