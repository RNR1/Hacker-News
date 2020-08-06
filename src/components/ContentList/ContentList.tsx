import React, { FC, Fragment } from 'react'
import { Item } from '../Navbar/Navbar'

export const ContentList: FC<{ items: string[] }> = ({ items }) => {
	return (
		<>
			{items.map((item, i) => (
				<Fragment key={i.toString()}>
					<Item>{item}</Item>
					{i !== items.length - 1 && <Item> | </Item>}
				</Fragment>
			))}
		</>
	)
}
