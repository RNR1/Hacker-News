import React from 'react'
import styled from 'styled-components'

import { ContentList } from './ContentList'

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

const Container = styled.div`
	& .line {
		border: none;
		border-top: 3px solid #ff6600;
		color: #ff6600;
		overflow: visible;
		height: 5px;
	}

	& .content {
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		height: 100%;
		display: flex;
		padding-inline-start: 0;
		margin-block-start: 0;
		margin-block-end: 0;
		list-style: none;
	}
`

const Footer = () => {
	return (
		<Container>
			<hr className='line' />
			<ul className='content'>
				<ContentList items={footerContent} />
			</ul>
		</Container>
	)
}

export default Footer
