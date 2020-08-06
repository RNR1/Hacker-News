import React, { FC, Fragment } from 'react'
import Logo from '../Logo/Logo'
import styled from 'styled-components'

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

const Item = styled.li<{ logo?: boolean }>`
	display: flex;
	align-items: center;
	padding: 2px;
	padding-right: ${({ logo }) => (logo ? '10px' : '0')};
`

const Title = styled.strong`
	margin-left: 3px;
`
const items = [
	{ label: 'new', to: '/' },
	{ label: 'past', to: '/' },
	{ label: 'comments', to: '/' },
	{ label: 'ask', to: '/' },
	{ label: 'show', to: '/' },
	{ label: 'jobs', to: '/' },
	{ label: 'submit', to: '/' }
]
const Navbar: FC = () => {
	return (
		<Nav>
			<LogoContainer>
				<Logo />
				<Title>Hacker News</Title>
			</LogoContainer>
			<List>
				{items.map(({ label }, i) => (
					<Fragment key={i.toString()}>
						<Item>{label}</Item>
						{i !== items.length - 1 && <Item> | </Item>}
					</Fragment>
				))}
			</List>
		</Nav>
	)
}

export default Navbar
