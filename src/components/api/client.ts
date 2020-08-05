import axios from 'axios'
import Story from '../models/Story'

const client = axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0'
})

const News = {
	topStories: (limit: number, offset: number) =>
		client.get<number[]>('/topstories.json').then(({ data }) => {
			const storyPromises: Promise<Story>[] = []
			data
				.slice(offset, limit)
				.forEach((id) => storyPromises.push(News.story(id)))
			return Promise.all(storyPromises)
		}),
	story: (id: number) =>
		client.get<Story>(`/item/${id}.json`).then(({ data }) => data)
}

export default News
