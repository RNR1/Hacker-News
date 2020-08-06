import React from 'react'

import { ContentList } from './ContentList'
import { Line, CenteredList } from '../styles/Styled'

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
		<div>
			<Line />
			<CenteredList>
				<ContentList items={footerContent} />
			</CenteredList>
		</div>
	)
}

export default Footer
