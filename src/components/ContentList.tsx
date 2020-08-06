import React, { FC, Fragment } from 'react'

import { NavItem } from '../styles/Styled'

export const ContentList: FC<{ items: string[] }> = ({ items }) => {
	return (
		<>
			{items.map((item, i) => (
				<Fragment key={i.toString()}>
					<NavItem>{item}</NavItem>
					{i !== items.length - 1 && <NavItem> | </NavItem>}
				</Fragment>
			))}
		</>
	)
}
