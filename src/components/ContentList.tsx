import React, { FC, Fragment } from 'react'
import styled from 'styled-components'

export const NavItem = styled.li`
	display: flex;
	align-items: center;
	padding: 2px;
`

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
