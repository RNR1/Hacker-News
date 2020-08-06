import React, { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import Story from '../../models/Story'

dayjs.extend(relativeTime)

interface Props {
	index: number
	story: Story
}

const Item = styled.li`
	list-style: none;
	padding-top: 7px;
`

const Title = styled.div`
	font-family: Verdana, Geneva, sans-serif;
	font-weight: 500;
	font-size: 0.95em;

	& * {
		margin-left: 3px;
	}
`

const Index = styled.span`
	margin-left: 10px;
	color: grey;
`

const Url = styled.a`
	color: grey;
	text-decoration: none;
	font-size: 0.8em;

	&:hover {
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

const Link = styled.a`
	color: black;
	text-decoration: none;
`

const StoryItem: FC<Props> = ({ story, index }) => {
	const hostName = story.url ? new URL(story.url).hostname : null
	return (
		<Item>
			<Title>
				<Index>{index}.</Index>
				<FontAwesomeIcon icon={faCaretUp} color='grey' />
				<Link href={story.url} target='_blank'>
					{story.title}
				</Link>
				<Url href='#'>({hostName})</Url>
			</Title>
			<Details>
				<span>{story.score} points</span>
				<span>by {story.by}</span>
				<span>{dayjs.unix(story.time).fromNow()}</span>
				<span>| hide</span>
				<span>| {story.descendants} comments</span>
			</Details>
		</Item>
	)
}

export default StoryItem
