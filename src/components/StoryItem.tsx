import React, { FC } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import Story from '../models/Story'
import { Item, StoryTitle, Index, Url, Details, Link } from '../styles/Styled'

dayjs.extend(relativeTime)

interface Props {
	index: number
	story: Story
}

const StoryItem: FC<Props> = ({ story, index }) => {
	const hostName = story.url ? new URL(story.url).hostname : null
	return (
		<Item>
			<StoryTitle>
				<Index>{index}.</Index>
				<FontAwesomeIcon icon={faCaretUp} color='grey' />
				<Link href={story.url} target='_blank'>
					{story.title}
				</Link>
				<Url href='#'>({hostName})</Url>
			</StoryTitle>
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
