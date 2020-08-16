import React, { FC } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import { ContentList } from './ContentList'

export const Nav = styled.nav`
	background-color: #ff6700;
	height: 24px;
	font-size: 1.1em;
	display: flex;
	align-items: center;

	@media (max-width: 750px) {
		height: 42px;
	}

	& .content {
		height: 100%;
		display: flex;
		align-items: center;
		padding-inline-start: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		list-style: none;
	}

	& .logo-container {
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 2px;
		margin-right: 5px;

		& strong {
			margin-left: 3px;
		}
	}
`

const navbarContent = [
	'new',
	'past',
	'comments',
	'ask',
	'show',
	'jobs',
	'submit'
]

const Navbar: FC = () => {
	return (
		<Nav>
			<div className='logo-container'>
				<Logo />
				<strong>Hacker News</strong>
			</div>
			<ul className='content'>
				<ContentList items={navbarContent} />
			</ul>
		</Nav>
	)
}

export default Navbar
