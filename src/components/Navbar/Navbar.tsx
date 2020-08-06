import React, { FC } from 'react'
import Logo from '../Logo/Logo'
import styled from 'styled-components'
import { ContentList } from '../ContentList/ContentList'

const Nav = styled.nav`
	background-color: #ff6700;
	height: 24px;
	font-size: 1.1em;
	display: flex;
	align-items: center;

	@media (max-width: 750px) {
		height: 42px;
	}
`

const LogoContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 2px;
	margin-right: 5px;
`

const List = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	padding-inline-start: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	list-style: none;
`

export const Item = styled.li<{ logo?: boolean }>`
	display: flex;
	align-items: center;
	padding: 2px;
	padding-right: ${({ logo }) => (logo ? '10px' : '0')};
`

const Title = styled.strong`
	margin-left: 3px;
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
