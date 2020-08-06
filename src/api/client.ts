import axios from 'axios'
import Story from '../models/Story'

const client = axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0'
})

const News = {
	topStories: (limit: number, page: number) =>
		client.get<number[]>('/topstories.json').then(({ data }) => {
			const storyPromises: Promise<Story>[] = []
			const indexOfLastPost = page * limit
			let indexOfFirstPost = indexOfLastPost - limit

			data
				.slice(indexOfFirstPost, indexOfLastPost)
				.forEach((id) => storyPromises.push(News.story(id)))
			return Promise.all(storyPromises).then((stories) =>
				stories.map((story) => ({ ...story, index: ++indexOfFirstPost }))
			)
		}),
	story: (id: number) =>
		client.get<Story>(`/item/${id}.json`).then(({ data }) => data)
}

export default News
