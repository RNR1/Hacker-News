import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import News from '../api/client'
import { useQuery } from 'react-query'

const Story = () => {
	const { id } = useParams()
	const history = useHistory()
	if (!id) history.replace('/')
	const fetchStory = () => News.story(id)
	const { data: story } = useQuery('fetchStory', fetchStory)

	return <div>{story?.title}</div>
}

export default Story
