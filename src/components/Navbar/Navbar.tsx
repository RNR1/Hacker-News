import React, { FC } from 'react'

const Navbar: FC = () => {
	return (
		<nav
			style={{
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#FF6700',
				height: 24
			}}>
			<ul style={{ display: 'flex', paddingInlineStart: 0, listStyle: 'none' }}>
				<li>
					<strong>Hacker News</strong>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
