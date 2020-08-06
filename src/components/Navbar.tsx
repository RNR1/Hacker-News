import React, { FC } from 'react'
import Logo from './Logo'
import { ContentList } from './ContentList'
import { Nav, List, LogoContainer, Title } from '../styles/Styled'

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
			<LogoContainer>
				<Logo />
				<Title>Hacker News</Title>
			</LogoContainer>
			<List>
				<ContentList items={navbarContent} />
			</List>
		</Nav>
	)
}

export default Navbar
