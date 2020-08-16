import React, { FC } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import Story from '../models/Story'

dayjs.extend(relativeTime)

interface Props {
	index: number
	story: Story
}

const StoryTitle = styled.div`
	font-family: Verdana, Geneva, sans-serif;
	font-weight: 500;
	font-size: 0.95em;

	& * {
		margin-left: 3px;
	}

	& .index {
		margin-left: 10px;
		color: grey;
	}

	& .link {
		color: black;
		text-decoration: none;
	}

	& .grey {
		color: grey;
		text-decoration: none;
		font-size: 0.8em;
	}

	& .grey:hover {
		text-decoration: underline;
	}
`

const Details = styled.div`
	margin-top: 3px;
	margin-left: 34px;
	font-weight: 600;
	color: grey;
	font-size: 0.68em;

	& * {
		margin-left: 3px;
	}
`

const StoryItem: FC<Props> = ({ story, index }) => {
	const hostName = story.url ? new URL(story.url).hostname : null
	return (
		<li>
			<StoryTitle>
				<span className='index'>{index}.</span>
				<FontAwesomeIcon icon={faCaretUp} color='grey' />
				<a
					className='link'
					href={story.url}
					target='_blank'
					rel='noopener noreferrer'>
					{story.title}
				</a>
				<a className='link grey' href='#host'>
					({hostName})
				</a>
			</StoryTitle>
			<Details>
				<span>{story.score} points</span>
				<span>by {story.by}</span>
				<span>{dayjs.unix(story.time).fromNow()}</span>
				<span>| hide</span>
				<span>| {story.descendants} comments</span>
			</Details>
		</li>
	)
}

export default StoryItem
