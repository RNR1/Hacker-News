import React from 'react'
import styled from 'styled-components'

import { ContentList } from '../ContentList/ContentList'

const Container = styled.div``

const List = styled.ul`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding-inline-start: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	list-style: none;
`

const Line = styled.hr`
	border: none;
	border-top: 3px solid #ff6600;
	color: #ff6600;
	overflow: visible;
	height: 5px;
`

const footerContent = [
	'Guidelines',
	'FAQ',
	'Support',
	'API',
	'Security',
	'Lists',
	'Bookmarklet',
	'Legal',
	'Apply to YC',
	'Contact'
]

const Footer = () => {
	return (
		<Container>
			<Line />
			<List>
				<ContentList items={footerContent} />
			</List>
		</Container>
	)
}

export default Footer
