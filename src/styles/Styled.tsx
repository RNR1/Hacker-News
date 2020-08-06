import styled from 'styled-components'

export const Button = styled.button`
	border: none;
	background-color: transparent;
	margin-left: 34px;
	margin-top: 5px;
	padding: 10px;
`

export const Container = styled.div`
	margin: 0 auto;
	width: 85%;
	font-size: 14px;
	background-color: #f6f6ef;

	@media (max-width: 750px) {
		margin: 0;
		width: 100%;
		font-size: 15px;
	}
`
export const List = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	padding-inline-start: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	list-style: none;
`

export const CenteredList = styled(List)`
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`

export const Details = styled.div`
	margin-top: 3px;
	margin-left: 34px;
	font-weight: 600;
	color: grey;
	font-size: 0.68em;

	& * {
		margin-left: 3px;
	}
`

export const Img = styled.img`
	border: 1px solid white;
`

export const Index = styled.span`
	margin-left: 10px;
	color: grey;
`

export const Item = styled.li`
	list-style: none;
	padding-top: 7px;
`

export const Line = styled.hr`
	border: none;
	border-top: 3px solid #ff6600;
	color: #ff6600;
	overflow: visible;
	height: 5px;
`

export const Link = styled.a`
	color: black;
	text-decoration: none;
`

export const LogoContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 2px;
	margin-right: 5px;
`

export const Nav = styled.nav`
	background-color: #ff6700;
	height: 24px;
	font-size: 1.1em;
	display: flex;
	align-items: center;

	@media (max-width: 750px) {
		height: 42px;
	}
`

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	padding: 2px;
`

export const StoryTitle = styled.div`
	font-family: Verdana, Geneva, sans-serif;
	font-weight: 500;
	font-size: 0.95em;

	& * {
		margin-left: 3px;
	}
`

export const StoryList = styled.ul`
	padding-inline-start: 0;
	margin-block-start: 0;
	background-color: #f6f6ef;
`

export const Title = styled.strong`
	margin-left: 3px;
`

export const Url = styled.a`
	color: grey;
	text-decoration: none;
	font-size: 0.8em;

	&:hover {
		text-decoration: underline;
	}
`
