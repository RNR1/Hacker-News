import React, { FC } from 'react'
import PageNumber from './PageNumber'
import classes from './Pagination.module.css'

interface Props {
	postsPerPage: number
	totalPosts: number
	paginate: (number: number) => void
}

function getPageNumbers(totalPosts: number, postsPerPage: number) {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
		pageNumbers.push(i)
	return pageNumbers
}

const Pagination: FC<Props> = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = getPageNumbers(totalPosts, postsPerPage)
	return (
		<nav>
			<ul className={classes.Pages}>
				{pageNumbers.map((number) => (
					<PageNumber
						key={number.toString()}
						number={number}
						onClick={() => paginate(number)}
					/>
				))}
			</ul>
		</nav>
	)
}

export default Pagination
